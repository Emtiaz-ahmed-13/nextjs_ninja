const DynamicProductPage = async ({ params }: { params: { productId: string } }) => {
    const { productId } = params;
    console.log(productId);

    return (
        <div>
            <h1 className="text-4xl text-center">Dynamic Product Page</h1>
            <p className="text-center mt-4">Product ID: {productId}</p>
        </div>
    );
};

export default DynamicProductPage;
