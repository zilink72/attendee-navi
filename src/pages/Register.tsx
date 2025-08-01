import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Layout from '@/components/Layout';
import ProgressSteps from '@/components/ProgressSteps';
import { TextField, TextareaField, SelectField, RadioField, CheckboxField } from '@/components/FormField';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const STEPS = ['Basic', 'Travel', 'Stay', 'Personal', 'Items', 'Confirm'];

const GUEST_TYPES = [
  { value: 'vip', label: 'VIP' },
  { value: 'media', label: 'Media' },
  { value: 'corporate', label: 'Corporate Partner' },
  { value: 'standard', label: 'Standard' },
];

const SIZES = [
  { value: 'S', label: 'Small' },
  { value: 'M', label: 'Medium' },
  { value: 'L', label: 'Large' },
  { value: 'XL', label: 'X-Large' },
  { value: 'XXL', label: 'XX-Large' },
];

const HAT_SIZES = [
  { value: 'SM', label: 'S/M' },
  { value: 'LXL', label: 'L/XL' },
];

const COMMUNICATION_OPTIONS = [
  { value: 'email', label: 'Email' },
  { value: 'whatsapp', label: 'WhatsApp' },
];

const Register = () => {
  const navigate = useNavigate();
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({
    // Step 1
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    guestType: '',
    
    // Step 2
    airline: '',
    flightNumber: '',
    arrivalDateTime: '',
    departureDateTime: '',
    arrivalAirport: '',
    departureAirport: '',
    
    // Step 3
    accommodationRequired: '',
    hotelName: '',
    checkInDate: '',
    checkOutDate: '',
    specialRequests: '',
    transferRequirements: '',
    
    // Step 4
    dietaryRequirements: '',
    medicalRequirements: '',
    accessibilityRequirements: '',
    
    // Step 5
    shirtSize: '',
    jacketSize: '',
    hatSize: '',
    emergencyContactName: '',
    emergencyContactPhone: '',
    emergencyContactRelationship: '',
    
    // Step 6
    communicationPreferences: [] as string[],
    termsAccepted: false,
    privacyAccepted: false,
  });

  const updateFormData = (field: string, value: any) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const nextStep = () => {
    if (currentStep < 6) {
      setCurrentStep(prev => prev + 1);
    }
  };

  const prevStep = () => {
    if (currentStep > 1) {
      setCurrentStep(prev => prev - 1);
    }
  };

  const handleSubmit = () => {
    // Here you would submit the form data
    console.log('Form submitted:', formData);
    navigate('/register/confirmation');
  };

  const renderStep = () => {
    switch (currentStep) {
      case 1:
        return (
          <div className="space-y-6">
            <TextField
              label="First Name"
              required
              value={formData.firstName}
              onChange={(value) => updateFormData('firstName', value)}
              placeholder="Enter your first name"
            />
            <TextField
              label="Last Name"
              required
              value={formData.lastName}
              onChange={(value) => updateFormData('lastName', value)}
              placeholder="Enter your last name"
            />
            <TextField
              label="Email"
              required
              type="email"
              value={formData.email}
              onChange={(value) => updateFormData('email', value)}
              placeholder="Enter your email address"
            />
            <TextField
              label="Phone Number"
              required
              type="tel"
              value={formData.phone}
              onChange={(value) => updateFormData('phone', value)}
              placeholder="+1 (555) 123-4567"
            />
            <SelectField
              label="Guest Type"
              required
              value={formData.guestType}
              onChange={(value) => updateFormData('guestType', value)}
              placeholder="Select your guest type"
              options={GUEST_TYPES}
            />
          </div>
        );

      case 2:
        return (
          <div className="space-y-6">
            <TextField
              label="Airline"
              required
              value={formData.airline}
              onChange={(value) => updateFormData('airline', value)}
              placeholder="e.g., American Airlines"
            />
            <TextField
              label="Flight Number"
              required
              value={formData.flightNumber}
              onChange={(value) => updateFormData('flightNumber', value)}
              placeholder="e.g., AA123"
            />
            <TextField
              label="Arrival Date & Time"
              required
              type="datetime-local"
              value={formData.arrivalDateTime}
              onChange={(value) => updateFormData('arrivalDateTime', value)}
            />
            <TextField
              label="Departure Date & Time"
              required
              type="datetime-local"
              value={formData.departureDateTime}
              onChange={(value) => updateFormData('departureDateTime', value)}
            />
            <TextField
              label="Arrival Airport"
              required
              value={formData.arrivalAirport}
              onChange={(value) => updateFormData('arrivalAirport', value)}
              placeholder="e.g., JFK"
            />
            <TextField
              label="Departure Airport"
              required
              value={formData.departureAirport}
              onChange={(value) => updateFormData('departureAirport', value)}
              placeholder="e.g., LAX"
            />
          </div>
        );

      case 3:
        return (
          <div className="space-y-6">
            <RadioField
              label="Accommodation Required?"
              required
              value={formData.accommodationRequired}
              onChange={(value) => updateFormData('accommodationRequired', value)}
              options={[
                { value: 'yes', label: 'Yes' },
                { value: 'no', label: 'No' }
              ]}
            />
            
            {formData.accommodationRequired === 'yes' && (
              <>
                <TextField
                  label="Hotel Name"
                  value={formData.hotelName}
                  onChange={(value) => updateFormData('hotelName', value)}
                  placeholder="Enter hotel name"
                />
                <TextField
                  label="Check-in Date"
                  type="date"
                  value={formData.checkInDate}
                  onChange={(value) => updateFormData('checkInDate', value)}
                />
                <TextField
                  label="Check-out Date"
                  type="date"
                  value={formData.checkOutDate}
                  onChange={(value) => updateFormData('checkOutDate', value)}
                />
                <TextareaField
                  label="Special Requests"
                  value={formData.specialRequests}
                  onChange={(value) => updateFormData('specialRequests', value)}
                  placeholder="Any special accommodation requests..."
                />
              </>
            )}
            
            <TextareaField
              label="Transfer Requirements"
              value={formData.transferRequirements}
              onChange={(value) => updateFormData('transferRequirements', value)}
              placeholder="e.g., Need wheelchair accessible vehicle"
            />
          </div>
        );

      case 4:
        return (
          <div className="space-y-6">
            <TextareaField
              label="Dietary Requirements"
              value={formData.dietaryRequirements}
              onChange={(value) => updateFormData('dietaryRequirements', value)}
              placeholder="Any dietary restrictions or preferences..."
            />
            <TextareaField
              label="Medical Requirements"
              value={formData.medicalRequirements}
              onChange={(value) => updateFormData('medicalRequirements', value)}
              placeholder="Any medical requirements we should know about..."
            />
            <TextareaField
              label="Accessibility Requirements"
              value={formData.accessibilityRequirements}
              onChange={(value) => updateFormData('accessibilityRequirements', value)}
              placeholder="Any accessibility accommodations needed..."
            />
          </div>
        );

      case 5:
        return (
          <div className="space-y-6">
            <SelectField
              label="Shirt Size"
              value={formData.shirtSize}
              onChange={(value) => updateFormData('shirtSize', value)}
              placeholder="Select shirt size"
              options={SIZES}
            />
            <SelectField
              label="Jacket Size"
              value={formData.jacketSize}
              onChange={(value) => updateFormData('jacketSize', value)}
              placeholder="Select jacket size"
              options={SIZES}
            />
            <SelectField
              label="Hat Size"
              value={formData.hatSize}
              onChange={(value) => updateFormData('hatSize', value)}
              placeholder="Select hat size"
              options={HAT_SIZES}
            />
            
            <div className="border-t pt-6">
              <h3 className="font-semibold text-primary mb-4">Emergency Contact</h3>
              <div className="space-y-4">
                <TextField
                  label="Emergency Contact Name"
                  required
                  value={formData.emergencyContactName}
                  onChange={(value) => updateFormData('emergencyContactName', value)}
                  placeholder="Enter contact name"
                />
                <TextField
                  label="Emergency Contact Phone"
                  required
                  type="tel"
                  value={formData.emergencyContactPhone}
                  onChange={(value) => updateFormData('emergencyContactPhone', value)}
                  placeholder="+1 (555) 123-4567"
                />
                <TextField
                  label="Relationship"
                  required
                  value={formData.emergencyContactRelationship}
                  onChange={(value) => updateFormData('emergencyContactRelationship', value)}
                  placeholder="e.g., Spouse, Parent, Sibling"
                />
              </div>
            </div>
          </div>
        );

      case 6:
        return (
          <div className="space-y-6">
            <div>
              <h3 className="font-semibold text-primary mb-4">Communication Preferences</h3>
              <p className="text-sm text-muted-foreground mb-4">
                How would you like to receive updates?
              </p>
              
              <div className="space-y-3">
                {COMMUNICATION_OPTIONS.map((option) => (
                  <CheckboxField
                    key={option.value}
                    checked={formData.communicationPreferences.includes(option.value)}
                    onChange={(checked) => {
                      if (checked) {
                        updateFormData('communicationPreferences', [...formData.communicationPreferences, option.value]);
                      } else {
                        updateFormData('communicationPreferences', formData.communicationPreferences.filter(p => p !== option.value));
                      }
                    }}
                  >
                    {option.label}
                  </CheckboxField>
                ))}
              </div>
            </div>
            
            <div className="border-t pt-6 space-y-4">
              <CheckboxField
                required
                checked={formData.termsAccepted}
                onChange={(checked) => updateFormData('termsAccepted', checked)}
              >
                I agree to the <a href="/terms" className="text-primary hover:underline">Terms & Conditions</a>
              </CheckboxField>
              
              <CheckboxField
                required
                checked={formData.privacyAccepted}
                onChange={(checked) => updateFormData('privacyAccepted', checked)}
              >
                I agree to the <a href="/privacy" className="text-primary hover:underline">Privacy Policy</a>
              </CheckboxField>
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <Layout>
      <div className="max-w-lg mx-auto">
        <div className="text-center mb-8">
          <h1 className="text-2xl font-bold text-primary mb-2">Event Registration</h1>
          <p className="text-muted-foreground">Please complete all sections to register for the event</p>
        </div>

        <ProgressSteps
          currentStep={currentStep}
          totalSteps={6}
          steps={STEPS}
        />

        <Card className="p-6 shadow-medium">
          {renderStep()}
          
          <div className="flex justify-between mt-8 pt-6 border-t">
            <Button
              variant="outline"
              onClick={prevStep}
              disabled={currentStep === 1}
              className="flex items-center gap-2"
            >
              <ChevronLeft className="w-4 h-4" />
              Back
            </Button>
            
            {currentStep < 6 ? (
              <Button
                variant="default"
                onClick={nextStep}
                className="flex items-center gap-2"
              >
                Next
                <ChevronRight className="w-4 h-4" />
              </Button>
            ) : (
              <Button
                variant="premium"
                onClick={handleSubmit}
                disabled={!formData.termsAccepted || !formData.privacyAccepted}
              >
                Submit Registration
              </Button>
            )}
          </div>
        </Card>
      </div>
    </Layout>
  );
};

export default Register;