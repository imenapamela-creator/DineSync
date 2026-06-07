import React, { useState } from "react";
import "../styles/CredentialsPage.css";

function StepIndicator({ currentStep }) {
  const steps = ["Restaurant information", "Location", "Review"];
  return (
    <div className="step-indicator">
      {steps.map((label, index) => {
        const stepNum = index + 1;
        const isDone = stepNum < currentStep;
        const isActive = stepNum === currentStep;
        return (
          <React.Fragment key={label}>
            <div className="step-item">
              <div className={`step-circle ${isDone ? "done" : ""} ${isActive ? "active" : ""}`}>
                {isDone ? "✓" : stepNum}
              </div>
              <p className="step-label">{label}</p>
            </div>
            {index < steps.length - 1 && (
              <div className={`step-line ${stepNum < currentStep ? "done-line" : ""}`}></div>
            )}
          </React.Fragment>
        );
      })}
    </div>
  );
}

function Step1({ data, onChange, onNext }) {
  return (
    <div className="step-content">
      <h2>Tell us about your restaurant</h2>
      <div className="cred-form-box">
        <h3>Restaurant information</h3>
        <div className="cred-input-group">
          <label>Restaurant name</label>
          <input placeholder="eg. Kigalicious restaurant" value={data.name} onChange={(e) => onChange("name", e.target.value)} />
        </div>
        <div className="cred-input-group">
          <label>Restaurant type</label>
          <input placeholder="eg:Cafe" value={data.type} onChange={(e) => onChange("type", e.target.value)} />
        </div>
        <div className="cred-input-group">
          <label>Contact number @Restaurant</label>
          <div className="phone-input">
            <span>+250</span>
            <div className="divider"></div>
            <input placeholder="Mobile number" value={data.contactPhone} onChange={(e) => onChange("contactPhone", e.target.value)} />
          </div>
        </div>
        <p className="section-divider">Restaurant owner details</p>
        <div className="phone-input">
          <span>+250</span>
          <div className="divider"></div>
          <input placeholder="Mobile number" value={data.ownerPhone} onChange={(e) => onChange("ownerPhone", e.target.value)} />
        </div>
        <div className="cred-two-col">
          <div className="cred-input-group">
            <label>Owner name</label>
            <input placeholder="eg. jaques Kagabo" value={data.ownerName} onChange={(e) => onChange("ownerName", e.target.value)} />
          </div>
          <div className="cred-input-group">
            <label>Restaurant owner email</label>
            <input placeholder="eg. jaques@gmail.com" value={data.ownerEmail} onChange={(e) => onChange("ownerEmail", e.target.value)} />
          </div>
        </div>
        <button className="btn-next-step" onClick={onNext}>Next Step</button>
      </div>
    </div>
  );
}

function Step2({ data, onChange, onNext, onBack }) {
  return (
    <div className="step-content">
      <h2>where are you located?</h2>
      <div className="cred-form-box">
        <div className="cred-input-group">
          <label>Restaurant's full adress</label>
          <input placeholder="Enter full address" value={data.address} onChange={(e) => onChange("address", e.target.value)} />
        </div>
        <div className="cred-two-col">
          <div className="cred-input-group">
            <label>City</label>
            <input placeholder="eg : Kigali" value={data.city} onChange={(e) => onChange("city", e.target.value)} />
          </div>
          <div className="cred-input-group">
            <label>Postal code</label>
            <input placeholder="Enter postal code" value={data.postal} onChange={(e) => onChange("postal", e.target.value)} />
          </div>
        </div>
        <p className="section-divider">Restaurant service hours</p>
        <div className="cred-two-col">
          <div className="cred-input-group">
            <label>Opening hours</label>
            <select value={data.openTime} onChange={(e) => onChange("openTime", e.target.value)}>
              <option value="">from</option>
              {["06:00","07:00","08:00","09:00","10:00","11:00","12:00"].map(t => <option key={t} value={t}>{t}</option>)}
            </select>
          </div>
          <div className="cred-input-group">
            <label>closing hours</label>
            <select value={data.closeTime} onChange={(e) => onChange("closeTime", e.target.value)}>
              <option value="">To</option>
              {["20:00","21:00","22:00","23:00","00:00"].map(t => <option key={t} value={t}>{t}</option>)}
            </select>
          </div>
        </div>
        <div className="cred-form-buttons">
          <button className="btn-back" onClick={onBack}>Back</button>
          <button className="btn-next-step" onClick={onNext}>Next Step</button>
        </div>
      </div>
    </div>
  );
}

function Step3({ data, onBack, onFinish }) {
  return (
    <div className="step-content">
      <h2>Review your infomation</h2>
      <div className="cred-form-box">
        <p className="review-heading">Your restaurant info!</p>
        <div className="review-row">
          <span className="review-label">Restaurant's name</span>
          <span className="review-value">{data.name || "—"}</span>
        </div>
        <div className="review-row">
          <span className="review-label">Restaurant's adress</span>
          <span className="review-value">{data.address || "—"}</span>
        </div>
        <div className="review-row">
          <span className="review-label">Restaurant type</span>
          <span className="review-value">{data.type || "—"}</span>
        </div>
        <div className="cred-form-buttons">
          <button className="btn-back" onClick={onBack}>Back</button>
          <button className="btn-next-step" onClick={onFinish}>Finish</button>
        </div>
      </div>
    </div>
  );
}

function CredentialsPage() {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    name: "", type: "", contactPhone: "", ownerPhone: "",
    ownerName: "", ownerEmail: "", address: "", city: "",
    postal: "", openTime: "", closeTime: ""
  });

  function handleChange(field, value) {
    setFormData({ ...formData, [field]: value });
  }

  const illustrations = [
    { label: "Helps us personalise your restaurant", emoji: "🏪" },
    { label: "Add your restaurant location", emoji: "🗺️" },
    { label: "Please review and confirm your details", emoji: "📋" }
  ];

  return (
    <div className="cred-page">
      <div className="cred-left">
        <div className="cred-header">
          <div className="cred-logo">
            <span className="logo-dine">Dine</span>
            <span className="logo-sync">Sync</span>
          </div>
        </div>

        {step === 1 && <Step1 data={formData} onChange={handleChange} onNext={() => setStep(2)} />}
        {step === 2 && <Step2 data={formData} onChange={handleChange} onNext={() => setStep(3)} onBack={() => setStep(1)} />}
        {step === 3 && <Step3 data={formData} onBack={() => setStep(2)} onFinish={() => alert("Restaurant registered!")} />}
      </div>

      <div className="cred-right">
        <StepIndicator currentStep={step} />
        <div className="cred-illustration">
          <p className="cred-illustration-label">{illustrations[step - 1].label}</p>
          <div className="cred-illustration-emoji">{illustrations[step - 1].emoji}</div>
        </div>
      </div>
    </div>
  );
}

export default CredentialsPage;
