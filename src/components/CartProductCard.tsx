import { Button, Card, CardBody, Heading, HStack, Image, Badge, VStack } from '@chakra-ui/react'
import { Product } from '../hooks/useProducts'

interface Props {
  product: Product
}

const CartProductCard = ({ product }: Props) => {
  return (
    <Card>
      <Image src={product.thumbnail} width={300} height={250}/>
      <CardBody>
        <HStack justifyContent='space-between' marginBottom={3}>
          <Badge colorScheme="green" fontSize='24px' paddingX={2} borderRadius='4px'>$ {product.price}</Badge>
        </HStack>
        <Heading fontSize='2xl'>{product.title}</Heading>
        <VStack>
        {product.id && (
          <Button
            className={`product-card-button button-small button button-block button-border`}
            onClick={ () => { } }
            color='red'
          >
          Remove from basket
          </Button>
        )}
        </VStack>
      </CardBody>
    </Card>
  )
}

export default CartProductCard
