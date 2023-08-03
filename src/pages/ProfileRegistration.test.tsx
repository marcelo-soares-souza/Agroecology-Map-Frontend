import { render } from "@testing-library/react";
import "../i18n";

// components
import AboutYou from "~/components/ProfileRegistration/AboutYou";
import RequiredProfileInformation from "~/components/ProfileRegistration/RequiredProfileInformation";
import ProfilePreview from "~/components/ProfileRegistration/ProfilePreview";
import Location from "~/components/ProfileRegistration/Location";
import ImageSelection from "~/components/ProfileRegistration/ImageSelection";
import ProfessionalInformation from "~/components/ProfileRegistration/ProfessionalInformation";
import ContactInformation from "~/components/ProfileRegistration/ContactInformation";

describe("<Profile />", () => {
  const changePage = () => {};
  const onChangeAny = () => {};

  it("should render RequiredProfileInformation without errors", () => {
    expect(() =>
      render(
        <RequiredProfileInformation
          accountName=""
          fullName=""
          isFullNameVisible={true}
          changePage={() => {}}
          onAccountNameChange={() => {}}
          onFullNameChange={() => {}}
          onFullNameVisibleChange={() => {}}
          agreedToTerms={true}
          onAgreedToTermsChange={() => {}}
        />
      )
    ).not.toThrow();
  });

  it("should render AboutYou without errors", () => {
    expect(() =>
      render(
        <AboutYou
          pronouns=""
          shortBio=""
          changePage={changePage}
          onShortBioChange={onChangeAny}
          onPronounsChange={onChangeAny}
        />
      )
    ).not.toThrow();
  });
  it("should render Location without errors", () => {
    expect(() =>
      render(
        <Location
          changePage={changePage}
          city=""
          state=""
          country=""
          onCityChange={onChangeAny}
          onCountryChange={onChangeAny}
          onStateChange={onChangeAny}
        />
      )
    ).not.toThrow();
  });
  it("should render ImageSelection without errors", () => {
    expect(() =>
      render(
        <ImageSelection
          changePage={changePage}
          avatar=""
          banner=""
          onAvatarChange={onChangeAny}
          onBannerChange={onChangeAny}
        />
      )
    ).not.toThrow();
  });
  it("should render ProfessionalInformation without errors", () => {
    expect(() =>
      render(
        <ProfessionalInformation
          changePage={changePage}
          onProfessionChange={onChangeAny}
          onServicesChange={onChangeAny}
          professionalDetails={{ profession: "", services: [] }}
        />
      )
    ).not.toThrow();
  });
  it("should render ContactInformation without errors", () => {
    expect(() =>
      render(
        <ContactInformation
          contact={{}}
          onContactMethodChange={onChangeAny}
          changePage={changePage}
          onContactChange={onChangeAny}
          onContactVisibilityChange={onChangeAny}
        />
      )
    ).not.toThrow();
  });
  it("should render ProfilePreview without errors", () => {
    expect(() => render(<ProfilePreview />)).not.toThrow();
  });
});
