import { useEffect } from 'react'
import Hero from './components/Hero'
import SchemeDetails from './components/SchemeDetails'
import LocationBenefitsCTA from './components/LocationBenefitsCTA'
import SiteFooter from './components/SiteFooter'

function App() {
  useEffect(() => {
    document.title = 'Punjab Affordable Housing Scheme 2025 – Govt. Approved Plots in Mohali'

    const metaDesc = document.querySelector('meta[name="description"]') || document.createElement('meta')
    metaDesc.setAttribute('name', 'description')
    metaDesc.setAttribute(
      'content',
      'Apply now for 15 residential plots on Chandigarh–Ambala Highway, Derabassi, Mohali. Punjab Govt. approved housing scheme.'
    )
    if (!metaDesc.parentNode) document.head.appendChild(metaDesc)

    const orgLd = {
      '@context': 'https://schema.org',
      '@type': 'Organization',
      name: 'Punjab Affordable Housing Scheme',
      url: 'https://punjabaffordablehousingscheme.com',
      logo: 'https://punjabaffordablehousingscheme.com/logo.png',
      sameAs: [
        'https://www.facebook.com/',
        'https://www.instagram.com/',
        'https://www.youtube.com/'
      ]
    }

    const eventLd = {
      '@context': 'https://schema.org',
      '@type': 'Event',
      name: 'Punjab Affordable Housing Scheme – Plot Allotment Draw',
      startDate: '2025-10-23',
      eventAttendanceMode: 'https://schema.org/OfflineEventAttendanceMode',
      eventStatus: 'https://schema.org/EventScheduled',
      location: {
        '@type': 'Place',
        name: 'Derabassi, District Mohali',
        address: {
          '@type': 'PostalAddress',
          addressLocality: 'Derabassi',
          addressRegion: 'Punjab',
          addressCountry: 'IN'
        }
      },
      organizer: {
        '@type': 'Organization',
        name: 'Punjab Affordable Housing Scheme',
        url: 'https://punjabaffordablehousingscheme.com'
      },
      description:
        'Government-approved housing scheme draw for 15 residential plots near Chandigarh–Ambala Highway, Derabassi, Mohali.'
    }

    const faqLd = {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'How do I apply for the Punjab Affordable Housing Scheme?',
          acceptedAnswer: {
            '@type': 'Answer',
            text:
              'Click Apply Online Now and submit the application form with the fee before the last date. You will receive a confirmation on successful submission.'
          }
        },
        {
          '@type': 'Question',
          name: 'Who is eligible to apply?',
          acceptedAnswer: {
            '@type': 'Answer',
            text:
              'Any Indian citizen above 18 years can apply. Priority may be given to first-time home buyers and residents of Punjab as per scheme terms.'
          }
        },
        {
          '@type': 'Question',
          name: 'When is the draw date?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'The draw will be held on-site on 23rd October, 2025.'
          }
        }
      ]
    }

    const addJsonLd = (obj) => {
      const s = document.createElement('script')
      s.type = 'application/ld+json'
      s.text = JSON.stringify(obj)
      document.head.appendChild(s)
      return s
    }

    const s1 = addJsonLd(orgLd)
    const s2 = addJsonLd(eventLd)
    const s3 = addJsonLd(faqLd)

    return () => {
      s1.remove()
      s2.remove()
      s3.remove()
    }
  }, [])

  return (
    <div className="min-h-screen bg-white text-slate-900">
      <Hero />
      <SchemeDetails />
      <LocationBenefitsCTA />
      <SiteFooter />
    </div>
  )
}

export default App
