const FormatPhoneNumber = ({ children }: { children: string }) => {
    const formatPhoneNumber = (phoneNumber: string) => {
      // Remove all non-numeric characters
      const digits = phoneNumber.replace(/\D/g, "");
  
      // Check if the number starts with a country code
      let formattedNumber;
      if (digits.length > 10) {
        // Assuming the country code is 1 digit (like '1' for US/Canada)
        // Adjust this based on your requirements
        const countryCode = digits.substring(0, 1);
        const mainNumber = digits.substring(1);
        formattedNumber = `${countryCode} (${mainNumber.substring(0, 3)}) ${mainNumber.substring(3, 6)}-${mainNumber.substring(6)}`;
      } else if (digits.length === 10) {
        // Format without country code
        formattedNumber = `(${digits.substring(0, 3)}) ${digits.substring(3, 6)}-${digits.substring(6)}`;
      } else {
        // Return original if it doesn't match expected lengths
        return phoneNumber;
      }
  
      return formattedNumber;
    };
  
    return formatPhoneNumber(children)
  };
  
  export default FormatPhoneNumber;
  