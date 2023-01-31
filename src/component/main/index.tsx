import Head from "next/head";
// import Image from "next/image";
import { Inter } from "@next/font/google";
import styles from "@/styles/Home.module.css";
import { Box, Button, Image, Wrap, WrapItem, Center } from "@chakra-ui/react";
import { useRouter } from "next/router";

const inter = Inter({ subsets: ["latin"] });

export default function MainComponent() {
  const router = useRouter();

  return (
    <>
      <Box m={10} fontSize={40}>
        黒澤僚太のHP
      </Box>

      <Wrap w="100vw" spacing="30px" justify="center">
        <WrapItem>
          <Center
          //   w="200px" h="200px"
          // bg="red.200"
          >
            <Box
              onClick={() => {
                window.open(
                  "https://www.chatwork.com/#!rid188548942",
                  "_ blank"
                );
              }}
            >
              <Image
                src="http://curogames.sakura.ne.jp/server_images/kurosawa-2023-0131-home/chatworkIcon.png"
                m="auto"
                w={"200px"}
                h={"200px"}
                alt="chatworkIcon"
              />
              <Button
                m={10}
                fontSize={20}
                textAlign="center"
                backgroundColor={"#ace"}
              >
                chatwork
              </Button>
            </Box>
          </Center>
        </WrapItem>
        <WrapItem>
          <Center
          //    w="200px" h="200px" bg="green.200"
          >
            <Box
              onClick={() => {
                window.open(
                  "https://www.notion.so/caebade1aa7243ae8ca7c31b368d43b9",
                  "_ blank"
                );
              }}
            >
              <Image
                m="auto"
                src="http://curogames.sakura.ne.jp/server_images/kurosawa-2023-0131-home/NotionIcon.png"
                w={"200px"}
                h={"200px"}
                alt="chatworkIcon"
              />
              <Button
                m={10}
                fontSize={20}
                textAlign="center"
                backgroundColor={"#ace"}
              >
                ノーション
              </Button>
            </Box>
          </Center>
        </WrapItem>
        <WrapItem>
          <Center
          //   w="200px" h="200px" bg="tomato"
          >
            <Box
              onClick={() => {
                window.open(
                  "https://calendar.google.com/calendar/u/0/r",
                  "_ blank"
                );
              }}
            >
              <Image
                m="auto"
                src="http://curogames.sakura.ne.jp/server_images/kurosawa-2023-0131-home/googleCalenderIcon.png"
                w={"200px"}
                h={"200px"}
                alt="chatworkIcon"
              />
              <Button
                m={10}
                fontSize={20}
                textAlign="center"
                backgroundColor={"#ace"}
              >
                googleカレンダー
              </Button>
            </Box>{" "}
          </Center>
        </WrapItem>
        <WrapItem>
          <Center
          //   w="200px" h="200px" bg="blue.200"
          >
            <Box
              onClick={() => {
                window.open("https://www.youtube.com/", "_ blank");
              }}
            >
              <Image
                src="http://curogames.sakura.ne.jp/server_images/kurosawa-2023-0131-home/YoutubeIcon.png"
                m="auto"
                w={"200px"}
                h={"200px"}
                alt="chatworkIcon"
              />
              <Button
                m={10}
                fontSize={20}
                textAlign="center"
                backgroundColor={"#ace"}
              >
                youtube
              </Button>
            </Box>
          </Center>
        </WrapItem>
        <WrapItem>
          <Center
          //   w="200px" h="200px" bg="blue.200"
          >
            <Box
              onClick={() => {
                window.open("https://github.com/", "_ blank");
              }}
            >
              <Image
                src="http://curogames.sakura.ne.jp/server_images/kurosawa-2023-0131-home/GithubIcon.png"
                m="auto"
                w={"200px"}
                h={"200px"}
                alt="chatworkIcon"
              />
              <Button
                m={10}
                fontSize={20}
                textAlign="center"
                backgroundColor={"#ace"}
              >
                github
              </Button>
            </Box>
          </Center>
        </WrapItem>
        <WrapItem>
          <Center
          //   w="200px" h="200px" bg="blue.200"
          >
            <Box
              onClick={() => {
                window.open("https://www.freee.co.jp/", "_ blank");
              }}
            >
              <Image
                src="http://curogames.sakura.ne.jp/server_images/kurosawa-2023-0131-home/FreeeIcon.png"
                m="auto"
                w={"200px"}
                h={"200px"}
                alt="chatworkIcon"
              />
              <Button
                m={10}
                fontSize={20}
                textAlign="center"
                backgroundColor={"#ace"}
              >
                freee
              </Button>
            </Box>
          </Center>
        </WrapItem>
        <WrapItem>
          <Center
          //   w="200px" h="200px" bg="blue.200"
          >
            <Box
              onClick={() => {
                window.open(
                  "https://www.chatwork.com/#!rid188548942",
                  "_ blank"
                );
              }}
            >
              <Image
                src="http://curogames.sakura.ne.jp/server_images/kurosawa-2023-0131-home/WordpressIcon.png"
                m="auto"
                w={"200px"}
                h={"200px"}
                alt="chatworkIcon"
              />
              <Button
                m={10}
                fontSize={20}
                textAlign="center"
                backgroundColor={"#ace"}
              >
                ブログ
              </Button>
            </Box>
          </Center>
        </WrapItem>
        <WrapItem>
          <Center
          //   w="200px" h="200px" bg="blue.200"
          >
            <Box
              onClick={() => {
                window.open(
                  "https://twitter.com/semlabo/status/1619839256268275714",
                  "_ blank"
                );
              }}
            >
              <Image
                src="http://curogames.sakura.ne.jp/server_images/kurosawa-2023-0131-home/TwitterIcon.png"
                m="auto"
                w={"200px"}
                h={"200px"}
                alt="chatworkIcon"
              />
              <Button
                m={10}
                fontSize={20}
                textAlign="center"
                backgroundColor={"#ace"}
              >
                ツイッター
              </Button>
            </Box>
          </Center>
        </WrapItem>
      </Wrap>

      {/* <Box>
        <Image
          src="http://curogames.sakura.ne.jp/server_images/kurosawa-2023-0131-home/chatworkIcon.png"
          w={"200px"}
          h={"200px"}
          alt="chatworkIcon"
        />
      </Box>
      <Box>ノーション</Box>
      <Box>チャットワーク</Box>
      <Box>googleカレンダー</Box>
      <Box>youtube</Box>
      <Box>github</Box>
      <Box>Chrome</Box>
      <Box>freee</Box>
      <Box>ブログ</Box>
      <Box>ツイッター</Box> */}

      {/* <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <div className={styles.description}>
          <p>
            Get started by editing&nbsp;
            <code className={styles.code}>src/pages/index.tsx</code>
          </p>
          <div>
            <a
              href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
              target="_blank"
              rel="noopener noreferrer"
            >
              By{" "}
              <Image
                src="/vercel.svg"
                alt="Vercel Logo"
                className={styles.vercelLogo}
                width={100}
                height={24}
                priority
              />
            </a>
          </div>
        </div>

        <div className={styles.center}>
          <Image
            className={styles.logo}
            src="/next.svg"
            alt="Next.js Logo"
            width={180}
            height={37}
            priority
          />
          <div className={styles.thirteen}>
            <Image
              src="/thirteen.svg"
              alt="13"
              width={40}
              height={31}
              priority
            />
          </div>
        </div>

        <div className={styles.grid}>
          <a
            href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            className={styles.card}
            target="_blank"
            rel="noopener noreferrer"
          >
            <h2 className={inter.className}>
              Docs <span>-&gt;</span>
            </h2>
            <p className={inter.className}>
              Find in-depth information about Next.js features and&nbsp;API.
            </p>
          </a>

          <a
            href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            className={styles.card}
            target="_blank"
            rel="noopener noreferrer"
          >
            <h2 className={inter.className}>
              Learn <span>-&gt;</span>
            </h2>
            <p className={inter.className}>
              Learn about Next.js in an interactive course with&nbsp;quizzes!
            </p>
          </a>

          <a
            href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            className={styles.card}
            target="_blank"
            rel="noopener noreferrer"
          >
            <h2 className={inter.className}>
              Templates <span>-&gt;</span>
            </h2>
            <p className={inter.className}>
              Discover and deploy boilerplate example Next.js&nbsp;projects.
            </p>
          </a>

          <a
            href="https://vercel.com/new?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            className={styles.card}
            target="_blank"
            rel="noopener noreferrer"
          >
            <h2 className={inter.className}>
              Deploy <span>-&gt;</span>
            </h2>
            <p className={inter.className}>
              Instantly deploy your Next.js site to a shareable URL
              with&nbsp;Vercel.
            </p>
          </a>
        </div>
      </main> */}
    </>
  );
}
