import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { useToast } from '@/hooks/use-toast';
import { supabase } from '@/lib/supabase';
import { Trash2, Download, Users, Mail, TrendingUp, Eye } from 'lucide-react';

interface Subscriber {
  id: string;
  email: string;
  first_name: string;
  last_name: string;
  company: string;
  sector: string;
  status: string;
  subscription_date: string;
  source: string;
}

interface Campaign {
  id: string;
  name: string;
  subject: string;
  status: string;
  recipient_count: number;
  open_count: number;
  click_count: number;
  created_at: string;
  sent_at: string;
}

interface Stats {
  total_subscribers: number;
  active_subscribers: number;
  total_campaigns: number;
  avg_open_rate: number;
}

export const NewsletterAdmin = () => {
  const [subscribers, setSubscribers] = useState<Subscriber[]>([]);
  const [campaigns, setCampaigns] = useState<Campaign[]>([]);
  const [stats, setStats] = useState<Stats>({
    total_subscribers: 0,
    active_subscribers: 0,
    total_campaigns: 0,
    avg_open_rate: 0
  });
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');
  const { toast } = useToast();

  useEffect(() => {
    loadData();
  }, []);

  const loadData = async () => {
    try {
      // Load subscribers
      const { data: subscribersData, error: subscribersError } = await supabase
        .from('newsletter_subscribers')
        .select('*')
        .order('subscription_date', { ascending: false });

      if (subscribersError) throw subscribersError;

      // Load campaigns
      const { data: campaignsData, error: campaignsError } = await supabase
        .from('email_campaigns')
        .select('*')
        .order('created_at', { ascending: false });

      if (campaignsError) throw campaignsError;

      setSubscribers(subscribersData || []);
      setCampaigns(campaignsData || []);

      // Calculate stats
      const totalSubs = subscribersData?.length || 0;
      const activeSubs = subscribersData?.filter(s => s.status === 'active').length || 0;
      const totalCampaigns = campaignsData?.length || 0;
      const avgOpenRate = campaignsData?.length > 0 
        ? campaignsData.reduce((acc, c) => acc + (c.recipient_count > 0 ? (c.open_count / c.recipient_count) * 100 : 0), 0) / campaignsData.length
        : 0;

      setStats({
        total_subscribers: totalSubs,
        active_subscribers: activeSubs,
        total_campaigns: totalCampaigns,
        avg_open_rate: Math.round(avgOpenRate * 100) / 100
      });
    } catch (error) {
      console.error('Error loading data:', error);
      toast({
        title: "Erreur",
        description: "Impossible de charger les données.",
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };

  const deleteSubscriber = async (id: string) => {
    try {
      const { error } = await supabase
        .from('newsletter_subscribers')
        .delete()
        .eq('id', id);

      if (error) throw error;

      toast({
        title: "Suppression réussie",
        description: "L'abonné a été supprimé.",
      });
      
      loadData();
    } catch (error) {
      console.error('Error deleting subscriber:', error);
      toast({
        title: "Erreur",
        description: "Impossible de supprimer l'abonné.",
        variant: "destructive",
      });
    }
  };

  const exportSubscribers = () => {
    const csvContent = [
      ['Email', 'Prénom', 'Nom', 'Entreprise', 'Secteur', 'Statut', 'Date inscription'].join(','),
      ...subscribers.map(s => [
        s.email,
        s.first_name,
        s.last_name,
        s.company || '',
        s.sector || '',
        s.status,
        new Date(s.subscription_date).toLocaleDateString('fr-FR')
      ].join(','))
    ].join('\n');

    const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
    const link = document.createElement('a');
    link.href = URL.createObjectURL(blob);
    link.download = `newsletter_subscribers_${new Date().toISOString().split('T')[0]}.csv`;
    link.click();
  };

  const filteredSubscribers = subscribers.filter(s =>
    s.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
    s.first_name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    s.last_name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    (s.company && s.company.toLowerCase().includes(searchTerm.toLowerCase()))
  );

  if (loading) {
    return <div className="p-6">Chargement...</div>;
  }

  return (
    <div className="p-6 space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold">Administration Newsletter</h1>
        <Button onClick={exportSubscribers} variant="outline">
          <Download className="w-4 h-4 mr-2" />
          Exporter CSV
        </Button>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center space-x-2">
              <Users className="w-5 h-5 text-primary" />
              <div>
                <p className="text-sm text-muted-foreground">Total abonnés</p>
                <p className="text-2xl font-bold">{stats.total_subscribers}</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-4">
            <div className="flex items-center space-x-2">
              <Users className="w-5 h-5 text-success" />
              <div>
                <p className="text-sm text-muted-foreground">Abonnés actifs</p>
                <p className="text-2xl font-bold">{stats.active_subscribers}</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-4">
            <div className="flex items-center space-x-2">
              <Mail className="w-5 h-5 text-purple-500" />
              <div>
                <p className="text-sm text-muted-foreground">Campagnes</p>
                <p className="text-2xl font-bold">{stats.total_campaigns}</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-4">
            <div className="flex items-center space-x-2">
              <TrendingUp className="w-5 h-5 text-orange-500" />
              <div>
                <p className="text-sm text-muted-foreground">Taux d'ouverture</p>
                <p className="text-2xl font-bold">{stats.avg_open_rate}%</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      <Tabs defaultValue="subscribers" className="space-y-4">
        <TabsList>
          <TabsTrigger value="subscribers">Abonnés</TabsTrigger>
          <TabsTrigger value="campaigns">Campagnes</TabsTrigger>
        </TabsList>

        <TabsContent value="subscribers" className="space-y-4">
          <div className="flex justify-between items-center">
            <Input
              placeholder="Rechercher un abonné..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="max-w-sm"
            />
            <Badge variant="outline">
              {filteredSubscribers.length} abonné{filteredSubscribers.length > 1 ? 's' : ''}
            </Badge>
          </div>

          <Card>
            <CardContent className="p-0">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Email</TableHead>
                    <TableHead>Nom</TableHead>
                    <TableHead>Entreprise</TableHead>
                    <TableHead>Secteur</TableHead>
                    <TableHead>Statut</TableHead>
                    <TableHead>Date</TableHead>
                    <TableHead>Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {filteredSubscribers.map((subscriber) => (
                    <TableRow key={subscriber.id}>
                      <TableCell className="font-medium">{subscriber.email}</TableCell>
                      <TableCell>{subscriber.first_name} {subscriber.last_name}</TableCell>
                      <TableCell>{subscriber.company || '-'}</TableCell>
                      <TableCell>{subscriber.sector || '-'}</TableCell>
                      <TableCell>
                        <Badge variant={subscriber.status === 'active' ? 'default' : 'secondary'}>
                          {subscriber.status}
                        </Badge>
                      </TableCell>
                      <TableCell>
                        {new Date(subscriber.subscription_date).toLocaleDateString('fr-FR')}
                      </TableCell>
                      <TableCell>
                        <Button
                          variant="ghost"
                          size="sm"
                          onClick={() => deleteSubscriber(subscriber.id)}
                        >
                          <Trash2 className="w-4 h-4" />
                        </Button>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="campaigns" className="space-y-4">
          <div className="flex justify-between items-center">
            <h3 className="text-lg font-medium">Campagnes email</h3>
            <Button>Nouvelle campagne</Button>
          </div>

          <Card>
            <CardContent className="p-0">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Nom</TableHead>
                    <TableHead>Sujet</TableHead>
                    <TableHead>Statut</TableHead>
                    <TableHead>Destinataires</TableHead>
                    <TableHead>Ouvertures</TableHead>
                    <TableHead>Taux</TableHead>
                    <TableHead>Date</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {campaigns.map((campaign) => (
                    <TableRow key={campaign.id}>
                      <TableCell className="font-medium">{campaign.name}</TableCell>
                      <TableCell>{campaign.subject}</TableCell>
                      <TableCell>
                        <Badge variant={campaign.status === 'sent' ? 'default' : 'secondary'}>
                          {campaign.status}
                        </Badge>
                      </TableCell>
                      <TableCell>{campaign.recipient_count}</TableCell>
                      <TableCell>{campaign.open_count}</TableCell>
                      <TableCell>
                        {campaign.recipient_count > 0 
                          ? `${Math.round((campaign.open_count / campaign.recipient_count) * 100)}%` 
                          : '-'
                        }
                      </TableCell>
                      <TableCell>
                        {campaign.sent_at 
                          ? new Date(campaign.sent_at).toLocaleDateString('fr-FR')
                          : new Date(campaign.created_at).toLocaleDateString('fr-FR')
                        }
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};