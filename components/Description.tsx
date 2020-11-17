import React from "react";
import styled from "styled-components";
import { Data } from "../types/data";
import { NextComponentType, NextPageContext } from "next";
import ReactMarkdown from "react-markdown";
import gfm from "remark-gfm";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { a11yDark } from "react-syntax-highlighter/dist/cjs/styles/prism";
import { Box, Divider, Heading } from "@chakra-ui/react";

type Props = {
  value?: Data;
};

const Link = styled.a`
  color: #1de9b6;
  font-weight: 700;
`;

const Card = styled(Box)`
  p,
  table,
  pre {
    margin-top: 1rem;
    margin-bottom: 1rem;
  }
`;

export const Description: NextComponentType<
  NextPageContext,
  unknown,
  Props
> = ({ value }) => {
  if (!value) return null;
  return (
    <Card borderRadius="12px" borderWidth="1px" p="0.75rem" mt="1.25rem">
      <Heading size="md" p="0.25rem">
        {value?.description}
      </Heading>
      <Box p="1.2rem" fontSize="14px">
        <ReactMarkdown
          renderers={{
            // eslint-disable-next-line react/display-name
            code: ({ language, value }) => {
              return (
                <SyntaxHighlighter style={a11yDark} language={language}>
                  {value}
                </SyntaxHighlighter>
              );
            },
          }}
          escapeHtml={false}
          plugins={[gfm]}
        >
          {value?.definition}
        </ReactMarkdown>
      </Box>
      <Divider />
      <Box pt="0.75rem" textAlign="center">
        <Link target="_blank" rel="noreferrer" href={value?.link}>
          MDN
        </Link>
        でもっと詳しく
      </Box>
    </Card>
  );
};
