import { usasort } from "./usasort";

const problem1 = [
  "US",
  "CA",
  "GB",
  "DE",
  "FR",
  "AU",
  "JP",
  "CN",
  "IN",
  "BR",
  "MX",
  "IT",
  "ZA",
  "RU",
  "KR",
  "ES",
  "NL",
  "SE",
  "NO",
  "AR",
  "TR",
  "SA",
  "EG",
  "NG",
  "ID",
  "TH",
  "VN",
  "NZ",
  "CH",
  "BE",
  "DK",
  "FI",
  "IE",
  "AT",
  "PL",
  "CZ",
  "HU",
  "PT",
  "GR",
  "IL",
];

const problem2 = [
  { country: "United States", code: "US" },
  { country: "Canada", code: "CA" },
  { country: "United Kingdom", code: "GB" },
  { country: "Germany", code: "DE" },
  { country: "France", code: "FR" },
  { country: "Australia", code: "AU" },
  { country: "Japan", code: "JP" },
  { country: "China", code: "CN" },
  { country: "India", code: "IN" },
  { country: "Brazil", code: "BR" },
  { country: "Mexico", code: "MX" },
  { country: "Italy", code: "IT" },
  { country: "South Africa", code: "ZA" },
  { country: "Russia", code: "RU" },
  { country: "South Korea", code: "KR" },
  { country: "Spain", code: "ES" },
  { country: "Netherlands", code: "NL" },
  { country: "Sweden", code: "SE" },
  { country: "Norway", code: "NO" },
  { country: "Argentina", code: "AR" },
  { country: "Turkey", code: "TR" },
  { country: "Saudi Arabia", code: "SA" },
  { country: "Egypt", code: "EG" },
  { country: "Nigeria", code: "NG" },
  { country: "Indonesia", code: "ID" },
  { country: "Thailand", code: "TH" },
  { country: "Vietnam", code: "VN" },
  { country: "New Zealand", code: "NZ" },
  { country: "Switzerland", code: "CH" },
  { country: "Belgium", code: "BE" },
  { country: "Denmark", code: "DK" },
  { country: "Finland", code: "FI" },
  { country: "Ireland", code: "IE" },
  { country: "Austria", code: "AT" },
  { country: "Poland", code: "PL" },
  { country: "Czech Republic", code: "CZ" },
  { country: "Hungary", code: "HU" },
  { country: "Portugal", code: "PT" },
  { country: "Greece", code: "GR" },
  { country: "Israel", code: "IL" },
];

const solution1 = [
  "US",
  "AR",
  "AT",
  "AU",
  "BE",
  "BR",
  "CA",
  "CH",
  "CN",
  "CZ",
  "DE",
  "DK",
  "EG",
  "ES",
  "FI",
  "FR",
  "GB",
  "GR",
  "HU",
  "ID",
  "IE",
  "IL",
  "IN",
  "IT",
  "JP",
  "KR",
  "MX",
  "NG",
  "NL",
  "NO",
  "NZ",
  "PL",
  "PT",
  "RU",
  "SA",
  "SE",
  "TH",
  "TR",
  "VN",
  "ZA",
];
const solution2 = [
  { country: "United States", code: "US" },
  { country: "Argentina", code: "AR" },
  { country: "Australia", code: "AU" },
  { country: "Austria", code: "AT" },
  { country: "Belgium", code: "BE" },
  { country: "Brazil", code: "BR" },
  { country: "Canada", code: "CA" },
  { country: "China", code: "CN" },
  { country: "Czech Republic", code: "CZ" },
  { country: "Denmark", code: "DK" },
  { country: "Egypt", code: "EG" },
  { country: "Finland", code: "FI" },
  { country: "France", code: "FR" },
  { country: "Germany", code: "DE" },
  { country: "Greece", code: "GR" },
  { country: "Hungary", code: "HU" },
  { country: "India", code: "IN" },
  { country: "Indonesia", code: "ID" },
  { country: "Ireland", code: "IE" },
  { country: "Israel", code: "IL" },
  { country: "Italy", code: "IT" },
  { country: "Japan", code: "JP" },
  { country: "Mexico", code: "MX" },
  { country: "Netherlands", code: "NL" },
  { country: "New Zealand", code: "NZ" },
  { country: "Nigeria", code: "NG" },
  { country: "Norway", code: "NO" },
  { country: "Poland", code: "PL" },
  { country: "Portugal", code: "PT" },
  { country: "Russia", code: "RU" },
  { country: "Saudi Arabia", code: "SA" },
  { country: "South Africa", code: "ZA" },
  { country: "South Korea", code: "KR" },
  { country: "Spain", code: "ES" },
  { country: "Sweden", code: "SE" },
  { country: "Switzerland", code: "CH" },
  { country: "Thailand", code: "TH" },
  { country: "Turkey", code: "TR" },
  { country: "United Kingdom", code: "GB" },
  { country: "Vietnam", code: "VN" },
];

describe("usaSort", () => {
  it("works by the first method", () => {
    expect(
      usasort(problem1, {
        byCondition: {
          isUSA: (item) => item === "US",
          sortItem: (a, b) => a.localeCompare(b),
        },
      })
    ).toStrictEqual(solution1);
    expect(
      usasort(problem2, {
        byCondition: {
          isUSA: (item) => item.code === "US",
          sortItem: (a, b) => a.country.localeCompare(b.country),
        },
      })
    ).toStrictEqual(solution2);
  });

  it("works by the second method", () => {
    expect(
      usasort(problem1, {
        byValue: {
          getValue: (item) => item,
          usaValue: "US",
        },
      })
    ).toStrictEqual(solution1);
    expect(
      usasort(problem2, {
        byValue: {
          getValue: (item) => item.country,
          usaValue: "United States",
        },
      })
    ).toStrictEqual(solution2);
  });
});
