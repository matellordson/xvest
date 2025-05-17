export default function InvestInModel({
  params,
}: {
  params: { model: string };
}) {
  return <p>Buy {params.model}</p>;
}
