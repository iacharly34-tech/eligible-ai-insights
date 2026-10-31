import type { ComponentType } from 'react'
import { template as demoConfirmation } from './demo-confirmation'
import { template as leadNotification } from './lead-notification'
import { template as demoFollowup } from './demo-followup'
import { template as rdvConfirmation } from './rdv-confirmation'
import { template as rdvNotification } from './rdv-notification'

export interface TemplateEntry {
  component: ComponentType<any>
  subject: string | ((data: Record<string, any>) => string)
  displayName?: string
  previewData?: Record<string, any>
  /** Fixed recipient — overrides caller-provided recipientEmail when set. */
  to?: string
}

/**
 * Template registry — maps template names to their React Email components.
 * Import and register new templates here after creating them in this directory.
 *
 * Example:
 *   import { template as welcomeTemplate } from './welcome'
 *   // then add to TEMPLATES: 'welcome': welcomeTemplate
 */
export const TEMPLATES: Record<string, TemplateEntry> = {
  'demo-confirmation': demoConfirmation,
  'lead-notification': leadNotification,
  'demo-followup': demoFollowup,
  'rdv-confirmation': rdvConfirmation,
  'rdv-notification': rdvNotification,
}
