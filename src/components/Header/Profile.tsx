import { Flex, Text, Box, Avatar } from "@chakra-ui/react";

interface ProfileProps{
    showProfileData?: boolean
}

export function Profile({showProfileData = true}: ProfileProps){
    return (
        <Flex
            align="center"
        >
            { showProfileData && (
                <Box mr="4" textAlign="right">
                    <Text> Carlos Eduardo </Text>    
                    <Text color="gray.300" fontSize="small">
                        carlosciscon@gmail.com
                    </Text>
                </Box>                
            )}
            
        <Avatar size="md" name="Carlos Eduardo" src="https://github.com/carlosciscon.png"/>
        </Flex>
    );
}