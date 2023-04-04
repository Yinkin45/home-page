type ContactCardProps = {
  emailAddress: string
}

const ContactCard = (props: ContactCardProps) => {
  return (
    <div>
      <button>
        <a href={`mailto:${props.emailAddress}`}>Email Me</a>
      </button>
    </div>
  )
}

export default ContactCard
