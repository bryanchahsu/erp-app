import { useMutation, useQueryClient } from 'react-query';

function useUpdateProduct() {
  const queryClient = useQueryClient();

  const mutation = useMutation(async (productDetails) => {
    const response = await fetch(`http://localhost:8000/products/${productDetails.id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(productDetails),
    });

    if (!response.ok) {
      throw new Error('Network response was not ok');
    }

    return response.json();
  });

  const updateProduct = async (productDetails) => {
    try {
      const updatedData = await mutation.mutateAsync(productDetails);

      // Optionally, you can invalidate related queries to refetch data
      queryClient.invalidateQueries('products');

      return updatedData;
    } catch (error) {
      throw error;
    }
  };

  return { updateProduct, isUpdating: mutation.isLoading };
}

export default useUpdateProduct;
