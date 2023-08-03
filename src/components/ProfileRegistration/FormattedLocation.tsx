export const FormattedLocation = ({
  location: { country, state, city }
}: {
  location: { country?: string; state?: string; city?: string };
}) => (
  <>{`${country} ${
    city && state
      ? "- " + city + ", " + state
      : city || state
      ? "- " + (state ? state : city)
      : ""
  }`}</>
);
