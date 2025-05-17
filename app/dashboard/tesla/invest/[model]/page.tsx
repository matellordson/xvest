export default async function InvestInModel({
  params,
}: {
  params: Promise<{ model: any }>;
}) {
  const { model } = await params;
  return <p>Buy {model}</p>;
}
