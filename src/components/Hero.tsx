import Image from 'next/image'

import { Button } from '@/components/Button'
import { Container } from '@/components/Container'
import logoLaravel from '@/images/logos/laravel.svg'
import logoMirage from '@/images/logos/mirage.svg'
import logoStatamic from '@/images/logos/statamic.svg'
import logoStaticKit from '@/images/logos/statickit.svg'
import logoTransistor from '@/images/logos/transistor.svg'
import logoTuple from '@/images/logos/tuple.svg'

export function Hero() {
  return (
    <Container className="pb-16 pt-20 text-center lg:pt-32">
      <h1 className="mx-auto max-w-4xl font-display text-5xl font-medium tracking-tight text-slate-900 sm:text-5xl">
        Powering the World's Leading{' '}
        <span className="relative whitespace-nowrap">
        </span>{' '}
      </h1>
      <p className="mx-auto mt-6 max-w-4xl font-display text-5xl font-medium tracking-tight text-customRed sm:text-5xl">
        PGA Professionals & Destinations
      </p>
      <p className="mx-auto mt-6 max-w-2xl text-lg tracking-tight text-slate-700 ">
        The recent past has rapidly changed the expectations placed on
      </p>
      <p className="mx-auto  max-w-2xl text-lg tracking-tight text-slate-700 ">
        traditional bricks and mortar business, this has created an opportunity to
      </p>
      <p className="mx-auto  max-w-2xl text-lg tracking-tight text-slate-700 ">
        leverage online sales and communications.
      </p>
      <div className="mt-10 flex justify-center gap-x-6">
        <Button href="/register" className='bg-customRed'>Get Started Today</Button>
      </div>
      <div className="mt-36 lg:mt-44">
        <p className="font-display text-base text-slate-900">
          Trusted by these companies so far
        </p>
        <ul
          role="list"
          className="mt-8 flex items-center justify-center gap-x-8 sm:flex-col sm:gap-x-0 sm:gap-y-10 xl:flex-row xl:gap-x-12 xl:gap-y-0"
        >
          {[
            [
              { name: 'Transistor', logo: logoTransistor },
              { name: 'Tuple', logo: logoTuple },
              { name: 'StaticKit', logo: logoStaticKit },
            ],
            [
              { name: 'Mirage', logo: logoMirage },
              { name: 'Laravel', logo: logoLaravel },
              { name: 'Statamic', logo: logoStatamic },
            ],
          ].map((group, groupIndex) => (
            <li key={groupIndex}>
              <ul
                role="list"
                className="flex flex-col items-center gap-y-8 sm:flex-row sm:gap-x-12 sm:gap-y-0"
              >
                {group.map((company) => (
                  <li key={company.name} className="flex">
                    <Image src={company.logo} alt={company.name} unoptimized />
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
      </div>
    </Container>
  )
}
