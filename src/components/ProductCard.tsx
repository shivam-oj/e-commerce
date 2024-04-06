import { Button, Card, CardBody, Heading, HStack, Image, Badge, VStack } from '@chakra-ui/react'
import { useState } from 'react'
import { Product } from '../hooks/useProducts'
import { Rating } from 'react-simple-star-rating'


interface Props {
  product: Product
}

const ProductCard = ({ product }: Props) => {
  const [buttonText, setButtonText] = useState('Add to basket');
  const [buttonColor, setButtonColor] = useState('yellow');

  const changeTextColor = (text) => {
    if (text === 'Add to basket') {
      setButtonText('Remove from basket');
      setButtonColor('red');
    } else {
      setButtonText('Add to basket');
      setButtonColor('yellow');
    }
  };

  return (
    <Card>
      <Image src={product.thumbnail} width={300} height={250}/>
      <CardBody>
        <HStack justifyContent='space-between' marginBottom={3}>
          <Badge colorScheme="green" fontSize='24px' paddingX={2} borderRadius='4px'>$ {product.price}</Badge>
        </HStack>
        <Heading fontSize='2xl'>{product.title}</Heading>
        <HStack marginBottom={3}>
        <Rating initialValue={product.rating} iconsCount={1} allowFraction={true} readonly={true} emptyColor='#FFFF00' />
        <Badge colorScheme="blue" fontSize='24px' paddingX={2} borderRadius='4px'>{product.rating}</Badge>
        </HStack>
        {product.id && (
          <Button
            className={`product-card-button button-small button button-block button-border`}
            onClick={ () => { changeTextColor(buttonText) } }
            color={ buttonColor }
          >
          { buttonText }
          </Button>
        )}
      </CardBody>
    </Card>
  )
}

export default ProductCard
