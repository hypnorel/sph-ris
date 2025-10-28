'use client'

import Link from 'next/link'
import Card, { CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from '@/components/ui/Card'
import Section, { SectionHeader } from '@/components/ui/Section'
import Button from '@/components/ui/Button'
import { services } from '@/data/services'
import { ArrowRight, Check } from 'lucide-react'
import { motion } from 'framer-motion'
import { StaggerContainer } from '@/components/ui/Motion'

export default function ServicesOverview() {
  return (
    <Section background="gradient" className="bg-gradient-to-b from-white via-slate-50 to-white">
      <SectionHeader
        title={
          <>
            Un écosystème{' '}
            <span className="relative inline-block">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-600 to-secondary-600">
                tout-en-un
              </span>
              <motion.span
                className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-primary-600 to-secondary-600 rounded-full"
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5, duration: 0.8 }}
              />
            </span>
          </>
        }
        description="De la création de contenu à la stratégie digitale, tout ce dont vous avez besoin pour réussir"
      />

      <StaggerContainer className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
        {services.map((service, index) => (
          <motion.div
            key={service.id}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ delay: index * 0.1, duration: 0.5 }}
          >
            <Card hover glow className="flex flex-col h-full group relative overflow-hidden">
              {/* Gradient overlay on hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary-500/5 to-secondary-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              <CardHeader className="relative z-10">
                <motion.div
                  className="text-6xl mb-4 inline-block"
                  whileHover={{ scale: 1.1, rotate: [0, -10, 10, 0] }}
                  transition={{ duration: 0.5 }}
                >
                  {service.icon}
                </motion.div>
                <CardTitle className="text-xl md:text-2xl mb-2 group-hover:text-primary-600 transition-colors">
                  {service.title}
                </CardTitle>
                <CardDescription className="text-sm leading-relaxed">
                  {service.description}
                </CardDescription>
              </CardHeader>

              <CardContent className="flex-1 relative z-10">
                <ul className="space-y-3">
                  {service.features.slice(0, 3).map((feature, idx) => (
                    <motion.li
                      key={idx}
                      className="flex items-start gap-3 text-sm text-slate-600"
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.1 * idx }}
                    >
                      <div className="flex-shrink-0 w-5 h-5 rounded-full bg-primary-100 flex items-center justify-center mt-0.5">
                        <Check className="w-3 h-3 text-primary-600" strokeWidth={3} />
                      </div>
                      <span className="leading-relaxed">{feature}</span>
                    </motion.li>
                  ))}
                </ul>
              </CardContent>

              <CardFooter className="relative z-10">
                <Button size="sm" variant="outline" className="w-full" icon={<ArrowRight size={16} />} asChild>
                  <Link href={service.cta.href}>
                    {service.cta.text}
                  </Link>
                </Button>
              </CardFooter>
            </Card>
          </motion.div>
        ))}
      </StaggerContainer>
    </Section>
  )
}
