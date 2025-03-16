import React, { useCallback } from 'react';
import { useForm, Controller } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';

import { HStack, VStack, Box } from '../../components/layout';
import { TextTitle, TextBody, TextInput } from '../../components/text';
import { Button } from '../../components/button';
import { Color } from '../../styles/color';
import IG from '../../images/ig-logo.png';

const formSchema = z.object({
  name: z.string().min(1),
  email: z
    .string()
    .email()
    .refine(() => /^[^\s@]+@[^\s@]+\.[^\s@]+$/),
  message: z.string().min(1),
});

const getContentWidth = (isSmallScreen) => {
  if (isSmallScreen) return '95%';
  return '650px';
};

export const ContactSection = ({ isSmallScreen }) => {
  const contentWidth = getContentWidth(isSmallScreen);

  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(formSchema),
  });

  const onSubmit = useCallback((data) => {
    console.log(data);
    // email sending logic here - EmailJS?
  }, []);

  const handleIGClick = useCallback(() => {
    window.open('https://www.instagram.com/vimimade/', '_blank');
  }, []);

  return (
    <HStack
      id="contact-section"
      width="100%"
      color={Color.SECONDARY_2}
      justifyContent="center"
      spacingBottom="80px"
    >
      <VStack width={contentWidth} gap={20} marginHorizontal="40px">
        <HStack justifyContent="center" spacingTop="60px">
          <TextTitle color={Color.WHITE}>contact</TextTitle>
        </HStack>
        <HStack justifyContent="center" gap={20}>
          <img
            src={IG}
            width="35px"
            onClick={handleIGClick}
            style={{ cursor: 'pointer' }}
          />
          <img
            src={IG}
            width="35px"
            onClick={handleIGClick}
            style={{ cursor: 'pointer' }}
          />
        </HStack>

        <VStack
          gap={20}
          justifyContent="center"
          spacingBottom="25px"
          spacingTop="15px"
        >
          <TextBody color={Color.WHITE} textAlign="center">
            Thanks for stopping by! If you're interested in purchasing some
            pottery, commissioning a custom creation, or have any other
            questions, I'd love to hear from you.
          </TextBody>
          <TextBody color={Color.WHITE} textAlign="center">
            You can reach me by email, send a DM on Instagram, or use the form
            below to get in touch.
          </TextBody>
        </VStack>

        <VStack width="100%" gap={20}>
          <form onSubmit={handleSubmit(onSubmit)} style={{ width: '100%' }}>
            <VStack width="100%" gap={10}>
              <Box
                justifyContent="space-between"
                gap={10}
                smallScreenGap={10}
                alignItems="start"
                width="100%"
                isSmallScreen={isSmallScreen}
                defaultWidth="100%"
                style={{ maxWidth: '100%' }}
              >
                <Controller
                  name="name"
                  control={control}
                  render={({ field }) => (
                    <TextInput
                      {...field}
                      label={isSmallScreen ? 'Name' : undefined}
                      placeholder={isSmallScreen ? undefined : 'Name'}
                      error={errors.name ? true : ''}
                      width="100%"
                    />
                  )}
                />
                <Controller
                  name="email"
                  control={control}
                  render={({ field }) => (
                    <TextInput
                      {...field}
                      label={isSmallScreen ? 'Email' : undefined}
                      type="email"
                      placeholder={isSmallScreen ? undefined : 'Email'}
                      error={errors.email ? true : ''}
                      width="100%"
                    />
                  )}
                />
              </Box>
              <Controller
                name="message"
                control={control}
                render={({ field }) => (
                  <TextInput
                    {...field}
                    label={isSmallScreen ? 'Message' : undefined}
                    type="area"
                    error={errors.message ? true : ''}
                    placeholder={isSmallScreen ? undefined : 'Message'}
                    width="100%"
                    textareaRows={isSmallScreen ? 5 : 3}
                  />
                )}
              />

              <Box spacingTop="10px">
                <Button
                  content="Submit"
                  type="submit"
                  color={Color.PRIMARY}
                  textColor={Color.WHITE}
                  size="small"
                />
              </Box>
            </VStack>
          </form>
        </VStack>
      </VStack>
    </HStack>
  );
};
