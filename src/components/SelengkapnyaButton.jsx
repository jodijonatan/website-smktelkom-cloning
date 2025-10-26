// name ada props, nilainya akan diisi ketika komponen SelengkapnyaButton dipanggil
export default function SelengkapnyaButton({ name }) {
  return (
    <a className="bg-primary py-2 px-6 rounded-lg text-white mb-4" href="#">
      {name}
    </a>
  );
}
