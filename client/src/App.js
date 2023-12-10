import { ChakraProvider } from '@chakra-ui/react';
import ProductsScreen from './screens/ProductsScreens';


function App() {
  return (
    <ChakraProvider>
      <ProductsScreen />
    </ChakraProvider>
  );
}


export default App;
