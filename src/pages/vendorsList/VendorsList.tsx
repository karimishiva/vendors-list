import { useFetchVendorsQuery } from "src/store";
const VendorsList = () => {
  const { data, error, isFetching } = useFetchVendorsQuery({
    page: 0,
    page_size: 10,
    lat: 35.754,
    long: 51.328,
  });
  return (
    <main>
      <h1>{data?.data?.count}</h1>
      {data?.data?.finalResult?.map((itm, index) => {
        return <div key={index}>{itm?.data?.address}</div>;
      })}
    </main>
  );
};
export default VendorsList;
