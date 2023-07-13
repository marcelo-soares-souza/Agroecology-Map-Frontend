import { useEffect, useState } from "react";

// Components
import AboutYou from "../components/Profile/AboutYou";
import Location from "../components/Profile/Location";
import ImageSelection from "../components/Profile/ImageSelection";
import ProfilePreview from "../components/Profile/ProfilePreview";
import RequiredProfileInformation from "../components/Profile/RequiredProfileInformation";

// Mock Data
import { mockAccount } from "../mocks/mock-account";
import avatar from "../assets/mock/placeholder-avatar-pic.jpg";
import banner from "../assets/mock/placeholder-avatar-banner.jpg";

// CSS
import classes from "./Profile.module.css";

// Interfaces
import { IAccount } from "../interfaces/IAccount";
import ProfessionalInformation from "../components/Profile/ProfessionalInformation";

const Profile = () => {
  // const mockProfile: IAccount = useLoaderData() as IAccount;

  const [whichPage, setWhichPage] = useState("RequiredProfileInformation");
  const [profile, setProfile] = useState<IAccount>({});

  useEffect(() => {
    setProfile({
      accountName: "",
      displayName: "",
      fullName: "",
      isFullNameVisible: true,
      pronouns: "",
      shortBio: "",
      images: {
        avatar: avatar,
        banner: banner
      },
      location: {
        country: "",
        state: "",
        city: ""
      },
      professionalDetails: {
        services: [],
        profession: ""
      },
      agreedToTerms: false
    });
  }, []);

  const changePageHandler = (page: string) => {
    setWhichPage(page);
  };

  const onAccountNameChangeHandler = (accountName: string) => {
    setProfile((prevProfile) => ({ ...prevProfile, accountName }));
  };

  const onFullNameChangeHandler = (fullName: string) => {
    setProfile((prevProfile) => ({ ...prevProfile, fullName }));
  };

  const onPronounsChangeHandler = (pronouns: string) => {
    setProfile((prevProfile) => ({ ...prevProfile, pronouns }));
  };

  const onShortBioChangeHandler = (shortBio: string) => {
    setProfile((prevProfile) => ({ ...prevProfile, shortBio }));
  };

  const onCountryChangeHandler = (country: string) => {
    setProfile((prevProfile) => ({
      ...prevProfile,
      location: { ...prevProfile.location, country: country }
    }));
  };

  const onStateChangeHandler = (state: string) => {
    setProfile((prevProfile) => ({
      ...prevProfile,
      location: { ...prevProfile.location, state: state }
    }));
  };

  const onCityChangeHandler = (city: string) => {
    setProfile((prevProfile) => ({
      ...prevProfile,
      location: { ...prevProfile.location, city: city }
    }));
  };

  const onIsFullNameVisibleHandler = (isFullNameVisible: boolean) => {
    setProfile((prevProfile) => ({ ...prevProfile, isFullNameVisible }));
  };

  const onAgreedToTermsChangeHandler = (hasAgreed: boolean) => {
    setProfile((prevProfile) => ({
      ...prevProfile,
      agreedToTerms: hasAgreed
    }));
  };

  const onProfessionChangeHandler = (profession: string) => {
    setProfile((prevProfile) => ({
      ...prevProfile,
      professionalDetails: {
        ...prevProfile.professionalDetails,
        profession: profession
      }
    }));
  };
  const onServicesChangeHandler = (services: string[]) => {
    setProfile((prevProfile) => ({
      ...prevProfile,
      professionalDetails: {
        ...prevProfile.professionalDetails,
        services: services
      }
    }));
  };

  return (
    <div className="column-justify-center">
      <div className={classes.columnsContainer + " two-columns"}>
        <div className="grid-container">
          {whichPage === "RequiredProfileInformation" && (
            <RequiredProfileInformation
              accountName={profile?.accountName ?? ""}
              fullName={profile?.fullName ?? ""}
              isFullNameVisible={profile?.isFullNameVisible ?? true}
              changePage={changePageHandler}
              onAccountNameChange={onAccountNameChangeHandler}
              onFullNameChange={onFullNameChangeHandler}
              onFullNameVisibleChange={onIsFullNameVisibleHandler}
              agreedToTerms={profile?.agreedToTerms ?? false}
              onAgreedToTermsChange={onAgreedToTermsChangeHandler}
            />
          )}

          {whichPage === "AboutYou" && (
            <AboutYou
              pronouns={profile?.pronouns ?? ""}
              shortBio={profile?.shortBio ?? ""}
              changePage={changePageHandler}
              onShortBioChange={onShortBioChangeHandler}
              onPronounsChange={onPronounsChangeHandler}
            />
          )}

          {whichPage === "Location" && (
            <Location
              country={profile?.location?.country ?? ""}
              state={profile?.location?.state ?? ""}
              city={profile?.location?.city ?? ""}
              changePage={changePageHandler}
              onCountryChange={onCountryChangeHandler}
              onStateChange={onStateChangeHandler}
              onCityChange={onCityChangeHandler}
            />
          )}

          {whichPage === "ImageSelection" && (
            <ImageSelection
              avatar={profile?.images?.avatar ?? ""}
              banner={profile?.images?.banner ?? ""}
              changePage={changePageHandler}
            />
          )}

          {whichPage === "ProfessionalInformation" && (
            <ProfessionalInformation
              onProfessionChange={onProfessionChangeHandler}
              onServicesChange={onServicesChangeHandler}
              professionalDetails={{
                profession: profile.professionalDetails?.profession || "",
                services: profile.professionalDetails?.services || []
              }}
              changePage={changePageHandler}
            />
          )}
        </div>
        <div
          style={{
            display: "flex"
          }}
        >
          <ProfilePreview {...profile} />
        </div>
      </div>
    </div>
  );
};

export default Profile;

export const loader = async () => {
  return mockAccount;
};
