import styled from '@emotion/styled';
import { forwardRef } from 'react';
import { Button } from '../../components/button';
import { media } from '../../utils/breakpoints';
import { px2rem, SectionHeading } from '../../utils/styles';
import { useFormStatus } from '../../hooks/use-form-status';

const Section = styled.section`
  background-color: var(--color-attention);
  color: var(--color-attention-inverse);
  padding: var(--gutter-section);

  ${media.above('md')`
    padding-bottom: var(--section-offset);
    padding-top: var(--section-offset);
  `};
`;

const Text = styled.p`
  text-align: center;
`;

const ContactList = styled.ul`
  display: grid;
  list-style: none;
  margin: 0;
  padding: 0;

  ${media.above('md')`
    grid-template-columns: 1fr 1fr;
  `};
`;

const ContactListItem = styled.li`
  font-size: ${px2rem(20)};

  ${media.above('md')`
    display: flex;

    &:nth-of-type(odd) {
      justify-content: flex-end;
      margin-right: 10px;
    }
    &:nth-of-type(even) {
      margin-left: 10px;
    }
  `};
`;

const ContactListLink = styled.a`
  align-items: center;
  border: 1px solid transparent;
  color: var(--color-attention-inverse);
  display: flex;
  justify-content: center;
  padding: 13px 0;
  text-decoration: underline;
  transition: 0.3s all ease;

  &:focus {
    border-color: var(--color-bg);
    outline: none;
  }

  ${media.above('md')`
    display: inline-flex;
    padding: 10px;
    text-decoration: none;

    ${ContactListItem}:nth-of-type(odd) & {
      justify-content: flex-end;
    }
  `};

  &:hover {
    text-decoration: underline;
  }
  svg {
    fill: var(--color-attention-inverse);
    margin-right: 10px;
  }
`;

const ContactForm = styled.form`
  display: grid;
  gap: 0 10px;
  margin: 30px 0;

  ${media.above('md')`
    justify-self: center;
    grid-template-columns: max-content 500px;
  `};
`;

const FormSection = styled.label`
  display: grid;
  gap: 0 10px;
  grid-column: 1 / -1;
  grid-template-columns: subgrid;
  padding: 10px 0;
`;

const FormText = styled.span`
  font-size: ${px2rem(20)};

  ${media.above('md')`
    text-align: right;
  `};
`;

const FormInput = styled.input`
  background-color: #fff;
  border-radius: 4px;
  border: 1px solid var(--color-text);
  font-size: 16px;
  height: 32px;
  transition: background-color .2s ease;

  &:disabled {
    background-color: #ccc;
  }
  &:hover:not(:disabled) {
    background-color: #f3edd0;
  }
  &:focus:not(:disabled) {
    outline-color: #1976d2;
  }
`;

const FormTextarea = styled(FormInput)`
  min-height: 100px;
  resize: vertical;
`;

const StyledFormTextarea = FormTextarea.withComponent('textarea');

const StyledButton = styled(Button)`
  background: var(--color-accent);
  margin-top: 10px;

  &:hover {
    background-color: var(--color-attention-inverse);
    color: var(--color-text);
  }
`;

const Loader = styled.div`
  align-items: center;
  display: flex;
  gap: 10px;
  grid-column: 2;
  margin-top: 10px;
`;

const FormMessages = styled.div`
  ${media.above('md')`
    grid-column: 2;
  `};
`;

const ContactFormThankYou = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;

  svg {
    width: 48px;
    fill: #fff;
  }
`;

export const HomePageContact = forwardRef<HTMLElement>(function Contact(_props, ref) {
  const { status, submitForm } = useFormStatus();

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const myForm = event.currentTarget;
    const formData = new FormData(myForm);
    const formBody = new URLSearchParams(formData as any).toString();

    await submitForm(async () => {
      const res = await fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: formBody,
      });

      if (!res.ok) {
        throw new Error('Network error');
      }

      myForm.reset();

      return await res.text();
    });
  }

  const isIdle = status === 'idle';
  const isPending = status === 'pending';
  const isError = status === 'error';
  const isSuccess = status === 'success';

  return (
    <Section ref={ref}>
      <SectionHeading>Contact Me</SectionHeading>

      <Text>Let&apos;s work together to create your personalised Hindu wedding ceremony.</Text>

      <ContactForm
        name="contact"
        method="post"
        data-netlify="true"
        netlify-honeypot="custom-field"
        onSubmit={handleSubmit}
      >
        <div className="hidden">
          <FormInput name="custom-field" type="text" />
          <input type="hidden" name="form-name" value="contact" />
        </div>
        <FormSection>
          <FormText>Your Name *:</FormText>
          <FormInput type="text" name="name" autoComplete="name" disabled={isPending} required />
        </FormSection>
        <FormSection>
          <FormText>Your Email *:</FormText>
          <FormInput type="email" name="email" autoComplete="email" disabled={isPending} required />
        </FormSection>
        <FormSection>
          <FormText>Your Phone Number:</FormText>
          <FormInput type="tel" name="phone" autoComplete="tel" disabled={isPending} />
        </FormSection>
        <FormSection>
          <FormText>Your Wedding Location:</FormText>
          <FormInput type="text" name="location" disabled={isPending} />
        </FormSection>
        <FormSection>
          <FormText>Message *:</FormText>
          <StyledFormTextarea name="message" disabled={isPending} required></StyledFormTextarea>
        </FormSection>

        <FormMessages>
          {isPending ? (
            <Loader>
              <div className="loader"></div> Sending...
            </Loader>
          ) : null}

          {isIdle || isError ? <StyledButton type="submit">Send</StyledButton> : null}

          {isError ? (
            <p>
              Sorry, something went wrong submitting the form. Please try again or contact me below:
            </p>
          ) : null}

          {isSuccess ? (
            <ContactFormThankYou>
              <svg focusable="false" aria-hidden="true" viewBox="0 0 24 24">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2m-2 15-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8z"></path>
              </svg>
              <p>Thank you, I've recieved your details and I'll be in touch soon.</p>
            </ContactFormThankYou>
          ) : null}
        </FormMessages>
      </ContactForm>

      <ContactList>
        <ContactListItem>
          <ContactListLink href="tel:+447960723171">
            <svg viewBox="0 0 32 32" width="24">
              <title>Telephone Icon</title>
              <path d="M22 20c-2 2-2 4-4 4s-4-2-6-4-4-4-4-6 2-2 4-4-4-8-6-8-6 6-6 6c0 4 4.109 12.109 8 16s12 8 16 8c0 0 6-4 6-6s-6-8-8-6z" />
            </svg>
            +44 (0) 7960 723 171
          </ContactListLink>
        </ContactListItem>
        <ContactListItem>
          <ContactListLink href="mailto:piyushbhaishastri@gmail.com">
            <svg viewBox="0 0 32 32" width="24">
              <title>Email Icon</title>
              <path d="M29 4h-26c-1.65 0-3 1.35-3 3v20c0 1.65 1.35 3 3 3h26c1.65 0 3-1.35 3-3v-20c0-1.65-1.35-3-3-3zM12.461 17.199l-8.461 6.59v-15.676l8.461 9.086zM5.512 8h20.976l-10.488 7.875-10.488-7.875zM12.79 17.553l3.21 3.447 3.21-3.447 6.58 8.447h-19.579l6.58-8.447zM19.539 17.199l8.461-9.086v15.676l-8.461-6.59z" />
            </svg>
            piyushbhaishastri@gmail.com
          </ContactListLink>
        </ContactListItem>
        <ContactListItem>
          <ContactListLink href="https://www.facebook.com/mehta.piyushkumar" rel="external">
            <svg viewBox="0 0 32 32" width="24">
              <title>Facebook Icon</title>
              <path d="M29 0h-26c-1.65 0-3 1.35-3 3v26c0 1.65 1.35 3 3 3h13v-14h-4v-4h4v-2c0-3.306 2.694-6 6-6h4v4h-4c-1.1 0-2 0.9-2 2v2h6l-1 4h-5v14h9c1.65 0 3-1.35 3-3v-26c0-1.65-1.35-3-3-3z" />
            </svg>
            fb.com/mehta.piyushkumar
          </ContactListLink>
        </ContactListItem>
        <ContactListItem>
          <ContactListLink href="https://www.instagram.com/piyushkumar_mehta/" rel="external">
            <svg viewBox="0 0 32 32" width="24">
              <title>Instagram Icon</title>
              <path d="M16 2.881c4.275 0 4.781 0.019 6.462 0.094 1.563 0.069 2.406 0.331 2.969 0.55 0.744 0.288 1.281 0.638 1.837 1.194 0.563 0.563 0.906 1.094 1.2 1.838 0.219 0.563 0.481 1.412 0.55 2.969 0.075 1.688 0.094 2.194 0.094 6.463s-0.019 4.781-0.094 6.463c-0.069 1.563-0.331 2.406-0.55 2.969-0.288 0.744-0.637 1.281-1.194 1.837-0.563 0.563-1.094 0.906-1.837 1.2-0.563 0.219-1.413 0.481-2.969 0.55-1.688 0.075-2.194 0.094-6.463 0.094s-4.781-0.019-6.463-0.094c-1.563-0.069-2.406-0.331-2.969-0.55-0.744-0.288-1.281-0.637-1.838-1.194-0.563-0.563-0.906-1.094-1.2-1.837-0.219-0.563-0.481-1.413-0.55-2.969-0.075-1.688-0.094-2.194-0.094-6.463s0.019-4.781 0.094-6.463c0.069-1.563 0.331-2.406 0.55-2.969 0.288-0.744 0.638-1.281 1.194-1.838 0.563-0.563 1.094-0.906 1.838-1.2 0.563-0.219 1.412-0.481 2.969-0.55 1.681-0.075 2.188-0.094 6.463-0.094zM16 0c-4.344 0-4.887 0.019-6.594 0.094-1.7 0.075-2.869 0.35-3.881 0.744-1.056 0.412-1.95 0.956-2.837 1.85-0.894 0.888-1.438 1.781-1.85 2.831-0.394 1.019-0.669 2.181-0.744 3.881-0.075 1.713-0.094 2.256-0.094 6.6s0.019 4.887 0.094 6.594c0.075 1.7 0.35 2.869 0.744 3.881 0.413 1.056 0.956 1.95 1.85 2.837 0.887 0.887 1.781 1.438 2.831 1.844 1.019 0.394 2.181 0.669 3.881 0.744 1.706 0.075 2.25 0.094 6.594 0.094s4.888-0.019 6.594-0.094c1.7-0.075 2.869-0.35 3.881-0.744 1.050-0.406 1.944-0.956 2.831-1.844s1.438-1.781 1.844-2.831c0.394-1.019 0.669-2.181 0.744-3.881 0.075-1.706 0.094-2.25 0.094-6.594s-0.019-4.887-0.094-6.594c-0.075-1.7-0.35-2.869-0.744-3.881-0.394-1.063-0.938-1.956-1.831-2.844-0.887-0.887-1.781-1.438-2.831-1.844-1.019-0.394-2.181-0.669-3.881-0.744-1.712-0.081-2.256-0.1-6.6-0.1v0z" />
              <path d="M16 7.781c-4.537 0-8.219 3.681-8.219 8.219s3.681 8.219 8.219 8.219 8.219-3.681 8.219-8.219c0-4.537-3.681-8.219-8.219-8.219zM16 21.331c-2.944 0-5.331-2.387-5.331-5.331s2.387-5.331 5.331-5.331c2.944 0 5.331 2.387 5.331 5.331s-2.387 5.331-5.331 5.331z" />
              <path d="M26.462 7.456c0 1.060-0.859 1.919-1.919 1.919s-1.919-0.859-1.919-1.919c0-1.060 0.859-1.919 1.919-1.919s1.919 0.859 1.919 1.919z" />
            </svg>
            @piyushkumar_mehta
          </ContactListLink>
        </ContactListItem>
      </ContactList>
    </Section>
  );
});
