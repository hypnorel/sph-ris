import { clsx, type ClassValue } from 'clsx'
import { twMerge } from 'tailwind-merge'

/**
 * Utilitaire pour fusionner les classes Tailwind
 * Combine clsx et tailwind-merge pour éviter les conflits de classes
 */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}
