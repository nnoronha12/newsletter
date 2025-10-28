import { trigger, transition, style, animate, query, stagger } from '@angular/animations';

export const fadeInUp = trigger('fadeInUp', [
  transition(':enter', [
    style({ opacity: 0, transform: 'translateY(30px)' }),
    animate('0.8s ease-out', style({ opacity: 1, transform: 'translateY(0)' }))
  ])
]);

export const fadeIn = trigger('fadeIn', [
  transition(':enter', [
    style({ opacity: 0 }),
    animate('0.6s ease-out', style({ opacity: 1 }))
  ])
]);

export const staggerCards = trigger('staggerCards', [
  transition('* => *', [
    query(':enter', [
      style({ opacity: 0, transform: 'translateY(30px)' }),
      stagger('100ms', [
        animate('0.6s ease-out', style({ opacity: 1, transform: 'translateY(0)' }))
      ])
    ], { optional: true })
  ])
]);

export const scaleIn = trigger('scaleIn', [
  transition(':enter', [
    style({ opacity: 0, transform: 'scale(0.9)' }),
    animate('0.5s cubic-bezier(0.4, 0, 0.2, 1)', style({ opacity: 1, transform: 'scale(1)' }))
  ])
]);





