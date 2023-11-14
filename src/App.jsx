import {
  AspectRatio,
  Box,
  Button,
  Center,
  Container,
  Flex,
  HStack,
  Heading,
  Stack,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  Text,
  Textarea,
} from "@chakra-ui/react";
import React, { useState } from "react";

function App() {
  const [htmlCode, setHtmlCode] = useState("");
  const [cssCode, setCssCode] = useState("");
  const [jsCode, setJsCode] = useState("");
  const handleRun = () => {
    const ifr = document.getElementById("srk");
    ifr.contentDocument.body.innerHTML =
      htmlCode + "<style>" + cssCode + "</style>";
    ifr.contentWindow.eval(jsCode);
  };
  return (
    <>
      <Center mt={6}>
        <Stack spacing={0}>
          <Heading>Online Compiler</Heading>
          <Text textAlign={'center'} textTransform={'capitalize'}>create by arvaj saifi</Text>
        </Stack>
      </Center>
      <Flex
        flexDir={{
          base: "column",
          md: "row",
        }}
        px={{
          sm: 2,
          md: 5,
          lg: 12,
        }}
        mt={10}
      >
        <Box width={"full"} border={"1px solid black"} p={5}>
          <Tabs variant="enclosed">
            <TabList>
              <Tab>HTML</Tab>
              <Tab>CSS</Tab>
              <Tab>Javascript</Tab>
            </TabList>
            <TabPanels>
              <TabPanel p={0}>
                <Textarea
                  value={htmlCode}
                  onChange={(e) => setHtmlCode(e.target.value)}
                  placeholder="Write HTML Code"
                  h={"350px"}
                  resize={"none"}
                  overflowY={"auto"}
                  name="html"
                />
              </TabPanel>
              <TabPanel p={0}>
                <Textarea
                  value={cssCode}
                  onChange={(e) => setCssCode(e.target.value)}
                  placeholder="Write CSS Code"
                  h={"350px"}
                  resize={"none"}
                  overflowY={"auto"}
                  name="css"
                />
              </TabPanel>
              <TabPanel p={0}>
                <Textarea
                  value={jsCode}
                  onChange={(e) => setJsCode(e.target.value)}
                  placeholder="Write Javascript Code"
                  h={"350px"}
                  resize={"none"}
                  overflowY={"auto"}
                  name="javascript"
                />
              </TabPanel>
            </TabPanels>
          </Tabs>
        </Box>
        <Box
          width={"full"}
          flexBasis={"full"}
          flexGrow={1}
          border={"1px solid black"}
          p={5}
        >
          <Button
            color={"white"}
            bg={"green.600"}
            _hover={{
              bg: "green",
            }}
            onClick={handleRun}
          >
            Run
          </Button>
          <AspectRatio
            h={"350px"}
            ratio={1}
            border={"1px solid black"}
            borderRadius={"lg"}
          >
            <iframe id="srk" />
          </AspectRatio>
        </Box>
      </Flex>
    </>
  );
}

export default App;
