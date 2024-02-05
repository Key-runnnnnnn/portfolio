import { Box, HStack, Heading, Image, Text, VStack } from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import React from "react";

const Card = ({ title, description, imageSrc }) => {
  return (
    <>
      {/* <HStack>
        <Box bg='white'>
        <VStack>
        <img src={imageSrc}/>
        </VStack>
        <VStack p="5" color='black'>
        <Heading as='h4' size='md'>{title}</Heading>
        <Text textAlign='left'  >Hekko</Text>
        </VStack>
        </Box>
      </HStack> */}
      {/* <Box textAlign="left" bg="white">
        <Image src={imageSrc} />
        <div style={{padding: 25}}>
        <Heading as="h4" size="md" color="black">
          {title}
        </Heading>
        <Text color="black" py='2'>{description}</Text>
        <Text color='black'fontSize='sm' >See more <FontAwesomeIcon icon={faArrowRight} size="1x" /></Text>
        </div>
      </Box> */}

      <VStack
        color='black'
        backgroundColor='white'
        cursor='pointer'
        borderRadius='xl'
        width="500px" // Adjust the width as needed
        height="430px"
      >
        <Image src={imageSrc} borderRadius='xl'width="100%" height="60%" objectFit="cover"  />
        <VStack spacing={4} p={4} alignItems='flex-start'>
          <HStack justifyContent="space-between" alignItems='center'>
            <Heading as="h4" size="md" color="black">{title}</Heading>
          </HStack>
          <Text color='#64748b' fontSize='md'>{description}</Text>
          <HStack>
            <p>see more</p>
            <FontAwesomeIcon icon={faArrowRight} size='lx' />
          </HStack>
        </VStack>
      </VStack>
    </>
  );
};

export default Card;