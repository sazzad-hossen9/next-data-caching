export default function BooksCard({ book }) {
  return (
    <div>
      <div className="card card-border bg-base-100 w-96">
        <div className="card-body">
          <h2 className="card-title">{book.title}</h2>
          <p>
           {book.description}
          </p>
          <div className="card-actions justify-end">
            <button className="btn btn-primary">{book.price}</button>
          </div>
        </div>
      </div>
    </div>
  );
}
