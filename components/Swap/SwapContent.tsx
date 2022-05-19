import React, { useState } from 'react';
import { Flex, Text, chakra, Box, Input, Button } from '@chakra-ui/react';
import TokenList from '../TokenList/TokenList';
import ToggleToken from '../ToggleToken/ToggleToken';
import SwapSide from './SwapSide';
import BestPrice from '../BestPrice/BestPrice';
import CustomButton from '../CustomButton/CustomButton';
import { tokenList } from '../../utils/tokenList';

function SwapContent() {
  const [payToken, setPayToken] = useState<Token>(tokenList[0]);
  const [receiveToken, setReceiveToken] = useState<Token>(tokenList[1]);

  function selectPayToken(token: Token) {
    setPayToken(token);
  }
  function selectReceiveToken(token: Token) {
    setReceiveToken(token);
  }
  function tokenSwitchHandler() {
    setPayToken(receiveToken);
    setReceiveToken(payToken);
  }
  return (
    <>
      <Flex
        direction="column"
        bgColor="white"
        borderRadius="14px"
        padding="32px 22px"
      >
        <Flex
          justifyContent="space-between"
          alignItems="flex-end"
          fontSize="0.75rem"
          lineHeight="1rem"
          paddingBottom="14px"
        >
          <Text fontWeight="600" fontSize="0.875rem" lineHeight="1.25rem">
            <chakra.span>You pay</chakra.span>
          </Text>
          <Box>
            <Flex
              width="100%"
              justifyContent="space-between"
              alignItems="center"
              color="black"
              fontSize="0.75rem"
              lineHeight="1rem"
            >
              <chakra.span>Balance : 10</chakra.span>
            </Flex>
          </Box>
        </Flex>
        <Box
          paddingX="14px"
          backgroundColor="rgb(235 239 241/1)"
          height="64px"
          borderRadius="14px"
        >
          <Flex
            justifyContent="space-between"
            alignItems="center"
            paddingY="14px"
          >
            <TokenList selectToken={selectPayToken} token={payToken} />

            <Input
              fontWeight="600"
              fontSize="1.125rem"
              variant="unstyled"
              textAlign="right"
              placeholder="0.00"
              type="number"
              min="1"
            />
          </Flex>
        </Box>

        <ToggleToken handleTokenSwitch={tokenSwitchHandler} />

        <SwapSide swapSide="receive" balanceAmount={1} />

        <TokenList selectToken={selectReceiveToken} token={receiveToken} />

        <BestPrice />
      </Flex>
      <div
        style={{
          marginBottom: '48px',
        }}
      />
      <CustomButton />
    </>
  );
}

export default SwapContent;
