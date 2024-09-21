function Chip({ label, variant }) {
  return (
    <>
      {(variant === "outlined" || !variant) && (
        <div class="flex inline-flex justify-center items-center m-1 px-2 py-1 border border-gray-300 rounded-full text-base text-gray-700 font-medium">
          <div class="flex-initial leading-none text-xs font-normal">
            {label}
          </div>
        </div>
      )}

      {variant === "filled" && (
        <div class="flex inline-flex justify-center items-center m-1 px-2 py-1 border border-red-300 rounded-full bg-red-200 text-base text-red-700 font-medium">
          <div class="flex-initial max-w-full leading-none text-xs font-normal">
            {label}
          </div>
        </div>
      )}
    </>
  );
}

export default Chip;
