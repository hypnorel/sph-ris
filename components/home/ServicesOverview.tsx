import Link from 'next/link'
import Card, { CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from '@/components/ui/Card'
import Section, { SectionHeader } from '@/components/ui/Section'
import Button from '@/components/ui/Button'
import { services } from '@/data/services'
import { ArrowRight } from 'lucide-react'

export default function ServicesOverview() {
  return (
    <Section background="white">
      <SectionHeader
        title={
          <>
            Nos <span className="text-primary-600">Services</span>
          </>
        }
        description="Un écosystème complet pour développer votre présence en ligne et votre personal branding"
      />

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        {services.map((service) => (
          <Card key={service.id} hover className="flex flex-col">
            <CardHeader>
              <div className="text-5xl mb-4">{service.icon}</div>
              <CardTitle className="text-xl">{service.title}</CardTitle>
              <CardDescription className="text-sm">{service.description}</CardDescription>
            </CardHeader>

            <CardContent className="flex-1">
              <ul className="space-y-2">
                {service.features.slice(0, 3).map((feature, index) => (
                  <li key={index} className="flex items-start gap-2 text-sm text-slate-600">
                    <span className="text-primary-600 mt-0.5">✓</span>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </CardContent>

            <CardFooter>
              <Button size="sm" variant="ghost" className="w-full group" asChild>
                <Link href={service.cta.href}>
                  {service.cta.text}
                  <ArrowRight className="group-hover:translate-x-1 transition-transform" size={16} />
                </Link>
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </Section>
  )
}
