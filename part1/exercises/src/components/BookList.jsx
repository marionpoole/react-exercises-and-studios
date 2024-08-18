export default function BookList() {
   let pageTitle = "Book List";
   let book1 = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTv5iEM7UpX0fdDTx1zhhTaCV6k0CPL_QSpZg&s";
   let book2 = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSR9-GayzOxk5nrL1IR0UmhQk5Z3m2rq10Btw&s";
   let book3 = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTBzHJLaBepl3aDmVLA5QFstQUEU7nBTcK7qQ&s";

   return (
      <div>
         <h3>{pageTitle}</h3>
         <img src={book1} alt="The World According to Dragons" />
         <img src={book2} alt="Witch's Tarot" />
         <img src={book3} alt="The Soulmate" />
      </div>      
   );
}