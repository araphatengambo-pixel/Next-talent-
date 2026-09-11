type PaymentCardProps = {
  amount: number;
  status: string;
  date: string;
};

export default function PaymentCard({
  amount,
  status,
  date,
}: PaymentCardProps) {
  return (
    <article>
      <h2>Paiement</h2>

      <p>Montant : {amount}</p>
      <p>Statut : {status}</p>
      <p>Date : {date}</p>
    </article>
  );
}
