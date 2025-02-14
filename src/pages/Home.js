import React, { useCallback } from 'react';
import { useForm, Controller } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';

import { useNavigate } from 'react-router-dom';
import { HStack, VStack, Navbar, NavbarItem } from '../components/layout';
import { TextTitle, TextBody, TextInput } from '../components/text';
import { Button, FloatingButton } from '../components/button'

import { Color } from '../styles/color';
import Logo from '../images/logo-no-text.png'
import BG from '../images/bg-white.JPEG'
import About from '../images/about.png'
// import Tofu from '../images/tofu.png'
import IG from '../images/ig-logo.png'

const bgStyle = {
  width: '100%',
  justifyContent: 'center',
  height: '1000px',
  backgroundImage: `url(${BG})`,
  backgroundSize: 'cover',
  backgroundRepeat: 'no-repeat',
  paddingTop: '60px',
};

const CONTENT_WIDTH = "1200px"
const LOGO = <img src={Logo} width="35px" />;

const formSchema = z.object({
  name: z.string().min(1, "Name is required"),
  email: z.string().email("Invalid email address").refine((value) => 
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value), {
      message: "Please enter a valid email format"
    }
  ),
  message: z.string().min(1, "Message is required"),
});

const Home = () => {
  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(formSchema),
  });

  const navigate = useNavigate();
  const handleViewPortfolio = useCallback(() => {
    navigate('/portfolio')
  }, [navigate]);

  const onSubmit = useCallback((data) => {
    console.log(data);
    // email sending logic here - EmailJS?
  }, []);

  const handleIGClick = useCallback(() => {
    window.open('https://www.instagram.com/vimimade/', '_blank');
  }, []);

  return (
    <VStack isPageContainer>
      <Navbar color={Color.SECONDARY} align="center" gap={2} textColor={Color.PRIMARY} vSpacing={10} isFixed>
        <NavbarItem icon={LOGO} route="/" />
        <NavbarItem label="about" route="#about-section" />
        <NavbarItem label="portfolio" route="/portfolio" />
        <NavbarItem label="contact" route="#contact-section" />
        {/* <NavbarItem label="commissions" route="/commissions" /> */}
      </Navbar>

      <VStack>
        <div style={bgStyle}>
          <HStack justifyContent='center' height="100%" >
            <HStack justifyContent='center' width="900px" height="100%" >
              <VStack height="100%" justifyContent='center' alignItems='center' gap={20}>
                <VStack alignItems='center'>
                  <TextTitle color={Color.WHITE}>VIMIMADE CERAMICS</TextTitle>
                  <TextBody color={Color.WHITE} textAlign='center'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam</TextBody>
                </VStack>

                <HStack gap={20}>
                  <Button content="View Portfolio" onClick={handleViewPortfolio} color={Color.SECONDARY_2} textColor={Color.WHITE} />
                  <Button content="Commission Inquiries" onClick={handleViewPortfolio} color={Color.SECONDARY_2} textColor={Color.WHITE} />
                </HStack>
              </VStack>
            </HStack>
          </HStack>
        </div>
      </VStack>

      <HStack id="about-section" width="100%" color={Color.SECONDARY_2} justifyContent='center' spacingBottom="40px">
        <VStack gap={30} width={CONTENT_WIDTH}  spacingTop="80px" spacingBottom="80px">
          <HStack justifyContent='center'  spacingTop="10px" spacingBottom="10px">
            <TextTitle color={Color.WHITE}>ABOUT VIMIMADE</TextTitle>
          </HStack>
          <HStack gap={40} width='100%'>
            <img src={About} width="50%" />
            <VStack gap={20}>
              <TextBody color={Color.WHITE}>
                Hello there, my name is Vimi! I started my ceramics journey in June 2024 as an outlet for some heavy emotions I was dealing with at the time. Very quickly, I became obsessed with creating bowls, plates, etc with my own two hands. 
              </TextBody>
              <TextBody color={Color.WHITE}>
                Vimimade is a project I started with the goal of living more intentionally. I want to nourish my soul with the joy that springs from creativity. My artist stamp and logo, which I engrave by hand on each individual item I create, is a drawing of my dog Tofu’s face. In that way, I keep him close to my heart and eternal.
              </TextBody>
              <TextBody color={Color.WHITE}>
              Through Vimimade, I hope to share a piece of both myself and Tofu with the world. Thank you for all your support and I look forward to what the future has in store!
              </TextBody>
            </VStack>
          </HStack>
        </VStack>
      </HStack>

      <HStack id="contact-section" width="100%" color={Color.PRIMARY} justifyContent='center' spacingBottom="80px">
        <VStack width="700px" gap={20}>
          <HStack justifyContent='center' spacingTop="60px">
            <TextTitle color={Color.WHITE}>contact</TextTitle>
          </HStack>
          <HStack justifyContent='center' gap={20}>
            <img src={IG} width="35px"/>
            <img src={IG} width="35px"/>
          </HStack>

          <VStack gap={20} justifyContent='center'>
            <TextBody color={Color.WHITE} textAlign='center'>
              Thanks for stopping by! If you&apos;re interested in purchasing some pottery, commissioning a custom creation, or have any other questions, I&apos;d love to hear from you.
            </TextBody>
            <TextBody color={Color.WHITE} textAlign='center'>
              You can reach me by email, send a DM on Instagram, or use the form below to get in touch.
            </TextBody>
          </VStack>
          
          <VStack width="100%" gap={20}>
            <form onSubmit={handleSubmit(onSubmit)}>
              <VStack width="100%" gap={20}>
                <HStack justifyContent="space-between" gap={50} alignItems="start">
                  <Controller
                    name="name"
                    control={control}
                    render={({ field }) => (
                      <TextInput {...field} placeholder="Name" error={errors.name?.message} />
                    )}
                  />
                  <Controller
                    name="email"
                    control={control}
                    render={({ field }) => (
                      <TextInput {...field} placeholder="Email" type="email" error={errors.email?.message} />
                    )}
                  />
                </HStack>
                <Controller
                  name="message"
                  control={control}
                  render={({ field }) => (
                    <TextInput {...field} placeholder="Message" type="area" error={errors.message?.message} />
                  )}
                />

                <Button
                  content="Submit"
                  type="submit"
                  color={Color.SECONDARY_2}
                  textColor={Color.WHITE}
                />
              </VStack>
            </form>
          </VStack>
        </VStack>
      </HStack>

      <FloatingButton icon={IG} align='right' onClick={handleIGClick} isBottom />
    </VStack>
  );
};

export default Home;
