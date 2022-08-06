import NextLink from 'next/link'
import {
  Link,
  Container,
  Heading,
  Box,
  SimpleGrid,
  Button,
  List,
  ListItem,
  useColorModeValue,
  chakra
} from '@chakra-ui/react'
import { ChevronRightIcon } from '@chakra-ui/icons'
import Paragraph from '../components/paragraph'
import { BioSection, BioYear } from '../components/bio'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import { GridItem } from '../components/grid-item'
import { IoLogoTwitter, IoLogoInstagram, IoLogoGithub } from 'react-icons/io5'
import thumbYouTube from '../public/images/links/youtube.png'
import thumbInkdrop from '../public/images/works/inkdrop_eyecatch.png'
import Image from 'next/image'

const ProfileImage = chakra(Image, {
  shouldForwardProp: prop => ['width', 'height', 'src', 'alt'].includes(prop)
})

const Home = () => (
  <Layout>
    <Container>
      <Box
        borderRadius="lg"
        mb={6}
        p={3}
        textAlign="center"
        bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')}
        css={{ backdropFilter: 'blur(10px)' }}
      >
        Привет, я начинающий Frontend разработчик из Москвы!
      </Box>

      <Box display={{ md: 'flex' }}>
        <Box flexGrow={1}>
          <Heading as="h2" variant="page-title">
           David Harutyunyan
          </Heading>
          <p></p>
        </Box>
        <Box
          flexShrink={0}
          mt={{ base: 4, md: 0 }}
          ml={{ md: 6 }}
          textAlign="center"
        >
          <Box
            borderColor="whiteAlpha.800"
            borderWidth={2}
            borderStyle="solid"
            w="100px"
            h="100px"
            display="inline-block"
            borderRadius="full"
            overflow="hidden"
          >
            <ProfileImage
              src="/images/12.png"
              alt="Profile image"
              borderRadius="full"
              width="100"
              height="100%"
            />
          </Box>
        </Box>
      </Box>

      <Section delay={0.1}>
        <Heading as="h3" variant="section-title">
          Work
        </Heading>
        <Paragraph>
          David - фрилансер и Fontend разработчик, базирующийся в Москве. Он  со
          страстью подходит к созданию крутых веб-сайтов, которые ему нравятся (такие как этот сайт). У него есть огромный интерес  / мотивация
           ко всему, что касается запуска, от планирования и проектирования
          до решения реальных проблем с помощью кода. Когда он не в Сети, он любит
          проводить время со своей девушкой, и чтением статей и книг. Ищет классную и крутю команду, в которой сможет развиваться
          и стаоновиться лучше как программист
           {' '}
          <NextLink href="/works/inkdrop" passHref scroll={false}>
            <Link>Inkdrop</Link>
          </NextLink>
          . В настоящее время он учится, практикует и оттачивает новые / имеющиесяя стек технологий&quot;
          <NextLink href="https://github.com/Dev420I" passHref>
            <Link target="_blank">Frontend</Link>
          </NextLink>
          &quot;
        </Paragraph>
        <Box align="center" my={4}>
          <NextLink href="/works" passHref scroll={false}>
            <Button rightIcon={<ChevronRightIcon />} colorScheme="teal">
              My portfolio
            </Button>
          </NextLink>
        </Box>
      </Section>

      <Section delay={0.2}>
        <Heading as="h3" variant="section-title">
          Bio
        </Heading>
        <BioSection>
          <BioYear>1997</BioYear>
          Года рождения.
        </BioSection>
        <BioSection>
          <BioYear>2018</BioYear>
          Закончил МНИ  Налоги / Бухгалтерия
        </BioSection>
        <BioSection>
          <BioYear>2021</BioYear>
          Загорелся стать Frontend разработчиком
        </BioSection>
        <BioSection>
          <BioYear>2022</BioYear>
          Продолжает учится новому и практиковать навыки
        </BioSection>
      </Section>

      <Section delay={0.3}>
        <Heading as="h3" variant="section-title">
          I ♥
        </Heading>
        <Paragraph>
          Музыку, Рисовать, Заниматься спортом, Програмировать, Читать

        </Paragraph>
      </Section>

      <Section delay={0.3}>
        <Heading as="h3" variant="section-title">
          On the web
        </Heading>
        <List>
          <ListItem>
            <Link href="https://github.com/Dev420I" target="_blank">
              <Button
                variant="ghost"
                colorScheme="teal"
                leftIcon={<IoLogoGithub />}
              >
                @Dev420I
              </Button>
            </Link>
          </ListItem>
          <ListItem>
            <Link href="https://www.instagram.com/theharutyunyan/" target="_blank">
              <Button
                variant="ghost"
                colorScheme="teal"
                leftIcon={<IoLogoInstagram />}
              >
                @Inst
              </Button>
            </Link>
          </ListItem>
          <ListItem>

          </ListItem>
          <ListItem>
            <Link href="https://twitter.com/home?lang=ru" target="_blank">
              <Button
                variant="ghost"
                colorScheme="teal"
                leftIcon={<IoLogoTwitter />}
              >
                @twit
              </Button>
            </Link>
          </ListItem>
        </List>

        <SimpleGrid columns={[1, 2, 2]} gap={6}>
          <GridItem
            href="https://gericht-resturant-web.vercel.app/"
            title="project dev"
            thumbnail={thumbYouTube}
          >
            Проэкт ресторана
          </GridItem>
          <GridItem
            href="https://nft-khaki-sigma.vercel.app/"
            title="NFT"
            thumbnail={thumbInkdrop}
          >
            NFT collection
          </GridItem>
        </SimpleGrid>

        <Box align="center" my={4}>
          <NextLink href="/posts" passHref scroll={false}>
            <Button rightIcon={<ChevronRightIcon />} colorScheme="teal">
              Popular posts
            </Button>
          </NextLink>
        </Box>
      </Section>
    </Container>
  </Layout>
)

export default Home
export { getServerSideProps } from '../components/chakra'
