export default function Inactive() {
  return (
    <section className="bg-[#e9e3dc] py-24 flex justify-center">

      <div className="bg-gray-100 p-12 text-center w-[500px]">
        <h3 className="text-2xl font-semibold mb-4">
          This page is not active
        </h3>

        <p className="text-gray-600 mb-6">
          If you're the owner, please log into your account to start a free trial or subscribe.
        </p>

        <button className="bg-black text-white px-6 py-3">
          GO TO ACCOUNT
        </button>
      </div>

    </section>
  );
}
