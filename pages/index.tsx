import React from "react";
import { Lookup } from "react-rainbow-components";
import { NextPage } from "next";
import fetch from "isomorphic-fetch";
import { Description, Layout, List } from "../components";
import { Data } from "../types/data";
import { getAbsoluteUrl } from "../utils";
import styled from "styled-components";
import { Transition } from "react-transition-group";

type Props = {
  data: Data[];
};

const Title = styled.h1`
  margin-top: ${({ state }) =>
    state === "entering" || state === "entered" ? 20 : 150}px;
  transition: all 350ms ease;
  font-size: 25px;
  line-height: 1em;
  font-weight: 400;
  margin-bottom: 29px;
`;

const Home: NextPage<Props> = ({ data }) => {
  const [value, setValue] = React.useState<Data | undefined>();
  const [options, setOptions] = React.useState<Data[]>(null);

  const filter = (query: string, options: Data[]) => {
    if (query) {
      return options.filter((item) => item.label.includes(query));
    }
    return [];
  };

  const onSearch = (inputValue: string) => {
    if (options && inputValue) {
      setOptions(filter(inputValue, options));
    } else if (inputValue) {
      setOptions(filter(inputValue, data));
    } else {
      setOptions(null);
    }
  };

  const onChange = React.useCallback((value: Data) => {
    setValue(value);
  }, []);

  const onClear = () => {
    setValue(undefined);
  };

  return (
    <Layout>
      <Transition in={!!value} timeout={500}>
        {(state) => (
          <Lookup
            id="lookup-1"
            label={
              <Title state={state}>JavaScript/TypeScript 演算子検索</Title>
            }
            options={options}
            value={value}
            onChange={onChange}
            onSearch={onSearch}
            onClick={onClear}
          />
        )}
      </Transition>

      <Description value={value} />
      <List options={data} value={value} onClick={onChange} />
    </Layout>
  );
};

Home.getInitialProps = async ({ req }) => {
  const { origin } = getAbsoluteUrl(req, "localhost:3000");
  const res = await fetch(`${origin}/api/hello`);
  const { data } = await res.json();
  return { data };
};

export default Home;
