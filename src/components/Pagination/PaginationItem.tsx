import { Button } from '@chakra-ui/react'

interface PaginationItemProsp {
  number: number;
  isCurrent?: boolean;
}

export function PaginationItem({
  number,
  isCurrent = false
}: PaginationItemProsp) {
  if (isCurrent) {
    return (
      <Button
        size="sm"
        fontSize="xs"
        width="4"
        colorScheme="pink"
        disable
        _disable={{
          bgColor: 'pink.500',
          cursor: 'default',
        }}
      >
        {number}
      </Button>

    );
  }

  return (
    <Button
      size="sm"
      fontSize="xs"
      width="4"
      colorScheme="pink"
      bgColor="gray.700"
      _hover={{
        bgColor: 'gray.500',
      }}
    >
      {number}
    </Button>
  );
}