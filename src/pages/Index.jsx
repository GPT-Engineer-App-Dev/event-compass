import { Container, Text, VStack, Heading, Button, Box, Image } from "@chakra-ui/react";
import { FaCalendarAlt } from "react-icons/fa";

const Index = () => {
  return (
    <Container centerContent maxW="container.md" height="100vh" display="flex" flexDirection="column" justifyContent="center" alignItems="center">
      <VStack spacing={6}>
        <Heading as="h1" size="2xl" textAlign="center">
          Welcome to EventMaster
        </Heading>
        <Text fontSize="lg" textAlign="center">
          Your ultimate platform for managing and organizing events seamlessly.
        </Text>
        <Box boxSize="sm">
          <Image src="/images/event-management.jpg" alt="Event Management" />
        </Box>
        <Button colorScheme="teal" size="lg" leftIcon={<FaCalendarAlt />}>
          Get Started
        </Button>
      </VStack>
    </Container>
  );
};

export default Index;