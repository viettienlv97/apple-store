import Col from './Col'

const footer = [
  {
    id: 'col-1',
    title: 'CUSTOMER SERVICES',
    links: [
      'Help & Contact Us',
      'Returns & Refunds',
      'Online Stores',
      'Terms & Conditions'
    ]
  },
  {
    id: 'col-2',
    title: 'COMPANY',
    links: ['What We Do', 'Available Services', 'Latest Posts', 'FAQs']
  },
  {
    id: 'col-3',
    title: 'SOCIAL MEDIA',
    links: ['Twitter', 'Instagram', 'Facebook', 'Pinterest']
  }
]

const Footer = () => {
  return (
    <footer className='bg-black'>
      <div className='container text-light'>
        <div className='row'>
          {footer.map((col) => {
            return (
              <div
                key={col.id}
                className='col-4 px-0'
              >
                <Col
                  title={col.title}
                  links={col.links}
                />
              </div>
            )
          })}
        </div>
      </div>
    </footer>
  )
}

export default Footer
