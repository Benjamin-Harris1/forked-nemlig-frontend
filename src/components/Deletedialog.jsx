export default function Deletedialog({ closeDialog }) {
  return (
    <div>
      <dialog open className="px-5">
        <h1 className="text-center text-2xl font-bold py-5">
          Er du sikker på, <br /> at du vil slette denne vare?
        </h1>
        <button
          className="bg-[rgb(212,121,58)] hover:bg-[#ecbc9a] w-[100px] rounded-md mb-4 my-2 py-2 text-black font-medium text-xl"
          onClick={closeDialog}
        >
          Luk
        </button>
        <button className="bg-[rgb(212,121,58)] hover:bg-[#ecbc9a] ml-[100px] w-[100px] rounded-md mb-4 my-2 py-2 text-black font-medium text-xl">
          Slet
        </button>
      </dialog>
    </div>
  );
}
