import { FaFacebook, FaGoogle, } from "react-icons/fa";

export enum TemplateType {
    GOOGLE = "google",
    FACEBOOK = "facebook",
  }
  
  type GenerateLinkPropType = { authMethod: TemplateType };
  
  const GenerateLink = ({ authMethod }: GenerateLinkPropType) => {
    const authTemplates = {
      google: FaGoogle,
      facebook: FaFacebook,
    };
    const Template = authTemplates[authMethod];
  
    return (
     <a href={`https://whatsapp-react-typed.herokuapp.com/auth/${authMethod}`}>
        <span className={authMethod}>
          <Template />
        </span>
      </a>
    );
  };
  export default GenerateLink