(function () {
  const adultPresentations = [
    [1,'Cardiovascular','Cardiac arrest – traumatic or non-traumatic'],
    [1,'Cardiovascular','Pre-arrest – severe end-organ hypoperfusion'],
    [1,'Cardiovascular','ROSC following cardiac arrest'],
    [1,'Cardiovascular','Chest pain with cardiac features + severe end-organ hypoperfusion'],
    [1,'Cardiovascular','Severe dehydration'],
    [1,'Environmental','Chemical burn ≥25% body surface area'],
    [1,'Mental Health','Violent/homicidal behaviour – imminent harm or specific plan'],
    [1,'Mental Health','Bizarre behaviour – uncontrolled'],
    [1,'Neurologic','Unconscious – GCS 3–9'],
    [1,'Neurologic','Seizure – actively seizing'],
    [1,'Obstetrics/Gynecology','Pregnancy ≥20 weeks – presenting fetal parts or prolapsed cord'],
    [1,'Obstetrics/Gynecology','Pregnancy ≥20 weeks – vaginal bleeding in 3rd trimester'],
    [1,'Respiratory','Respiratory arrest'],
    [1,'Respiratory','Shortness of breath – severe respiratory distress'],
    [1,'Trauma','Major trauma – severe hemodynamic compromise/shock'],
    [1,'Trauma','Traumatic amputation of an extremity'],

    [2,'Cardiovascular','Chest pain with cardiac features + borderline perfusion'],
    [2,'Cardiovascular','Hypertension – SBP ≥220 or DBP ≥130 with symptoms'],
    [2,'Cardiovascular','Syncope + new onset dysrhythmia/irregular pulse or suspected rate change'],
    [2,'Cardiovascular','Moderate dehydration'],
    [2,'ENT','Dental avulsion'],
    [2,'ENT','Sore throat – drooling/stridor or obvious lip/tongue/oropharyngeal swelling'],
    [2,'ENT','Neck pain – neck stiffness/meningismus ± fever'],
    [2,'ENT','Epistaxis – uncontrolled despite appropriate pressure'],
    [2,'Environmental','Frostbite/cold injury – cold pulseless limb'],
    [2,'Environmental','Hypothermia with severe symptoms'],
    [2,'Environmental','Chemical exposure – eye(s)'],
    [2,'Environmental','Chemical exposure – major burns to hands, feet, groin or face'],
    [2,'Environmental','Allergic reaction – previous severe reaction'],
    [2,'Gastrointestinal','Vomiting blood – active/significant hematemesis'],
    [2,'Gastrointestinal','Rectal bleed – large amount of melena/rectal bleeding'],
    [2,'Gastrointestinal','Abdominal pain – severe pain'],
    [2,'Mental Health','Attempted suicide or clear suicide plan'],
    [2,'Mental Health','Severe anxiety/agitation'],
    [2,'Neurologic','Altered LOC – GCS 10–13'],
    [2,'Neurologic','Headache – sudden, severe, worst ever'],
    [2,'Neurologic','Headache – visual acuity disturbance ± eye pain'],
    [2,'Neurologic','Seizure – post-ictal'],
    [2,'Neurologic','CVA – symptom onset <3.5 hours'],
    [2,'Obstetrics/Gynecology','Vaginal bleeding – heavy ± pregnancy'],
    [2,'Obstetrics/Gynecology','Pregnancy ≥20 weeks – active labour, contractions <2 min apart'],
    [2,'Obstetrics/Gynecology','Pregnancy ≥20 weeks – complex hypertension ± headache/edema/abdominal pain'],
    [2,'Ophthalmology','Acute vision loss'],
    [2,'Respiratory','Shortness of breath – moderate respiratory distress'],
    [2,'Respiratory','Foreign body obstruction – drooling/stridor, hoarseness or dysphagia'],
    [2,'Trauma','Significant mechanism of injury with trauma-related injury/symptoms/complaint'],
    [2,'Trauma','Penetrating head, chest or abdomen injury'],
    [2,'Trauma','Neurovascular compromise of an extremity'],
    [2,'Trauma','Burns ≥25% body surface area'],
    [2,'Trauma','Abdominal pain – severe central pain'],

    [3,'Cardiovascular','Chest pain, non-cardiac features – acute onset, ongoing'],
    [3,'Cardiovascular','Hypertension – SBP ≥220 or DBP ≥130 with no symptoms'],
    [3,'Cardiovascular','Hypertension – SBP 200–220 or DBP 110–130 with symptoms'],
    [3,'Cardiovascular','Mild dehydration'],
    [3,'Environmental','Frostbite/cold injury – blanching of skin'],
    [3,'Environmental','Hypothermia – moderate symptoms'],
    [3,'Gastrointestinal','Vomiting blood – coffee-ground emesis, small amount'],
    [3,'Gastrointestinal','Rectal bleed – melena, small amount'],
    [3,'Mental Health','Depression/suicidal – ideation, no plan'],
    [3,'Mental Health','Moderate anxiety/agitation'],
    [3,'Neurologic','Seizure – resolved, normal alertness'],
    [3,'Neurologic','CVA – onset ≥3.5 hours or resolved'],
    [3,'Obstetrics/Gynecology','Menorrhagia'],
    [3,'Obstetrics/Gynecology','Pregnancy ≥20 weeks – active labour, contractions ≥2 min apart'],
    [3,'Obstetrics/Gynecology','Pregnancy ≥20 weeks – possible leaking amniotic fluid ≥24 h'],
    [3,'Respiratory','Shortness of breath – mild/moderate respiratory distress'],
    [3,'Respiratory','Foreign body obstruction – no distress but difficulty swallowing'],
    [3,'Trauma','Burns 5–25% body surface area'],

    [4,'Cardiovascular','Hypertension – SBP 200–220 or DBP 110–130 with no symptoms'],
    [4,'Cardiovascular','Potential for dehydration'],
    [4,'Environmental','Hypothermia – mild with normal vital signs'],
    [4,'Gastrointestinal','Rectal bleeding – small amount'],
    [4,'Gastrointestinal','Constipation – mild pain <4/10'],
    [4,'Genitourinary','UTI complaints/symptoms – mild dysuria'],
    [4,'Mental Health','Mild anxiety/agitation'],
    [4,'Neurologic','Confusion – chronic, no change from usual state'],
    [4,'Obstetrics/Gynecology','Non-pregnant vaginal bleeding – minor/spotting'],
    [4,'Trauma','Burns <5% body surface area'],
    [4,'Trauma','Laceration/puncture – sutures required'],
    [4,'Trauma','Upper extremity injury'],

    [5,'Environmental','Minor bites ± mild pain <4'],
    [5,'Gastrointestinal','Diarrhea – mild, no dehydration'],
    [5,'General and Minor','Dressing change + normal vital signs ± mild pain <4'],
    [5,'Respiratory','Sore throat/upper respiratory illness – no respiratory compromise'],
    [5,'Trauma','Minor contusion/abrasion/laceration not requiring closure']
  ].map((x,i)=>({id:`a-${i}`,level:x[0],category:x[1],label:x[2],page: x[0]===1?18:x[0]===2?19:x[0]===3?21:x[0]===4?22:23}));

  const pediatricPresentations = [
    [1,'Behaviour','Unresponsive'],[1,'Cardiovascular','Cardiac arrest'],[1,'Cardiovascular','Shock/hypotension'],[1,'Cardiovascular','Exsanguinating hemorrhage'],[1,'Child Abuse','Unstable situation or conflict'],[1,'Endocrine','Diabetic – altered consciousness'],[1,'Gastrointestinal','Difficulty swallowing with airway/respiratory compromise'],[1,'Gastrointestinal','Abdominal trauma – penetrating/blunt + shock'],[1,'Gynecological','Vaginal bleeding + abnormal vital signs'],[1,'Hematologic/Immunologic','Anaphylaxis'],[1,'Infection','Septic shock'],[1,'Musculoskeletal','Major trauma'],[1,'Musculoskeletal','Traumatic amputation – extremity'],[1,'Musculoskeletal','Major cold injury – hypothermia'],[1,'Neurological','Major head injury'],[1,'Neurological','Unconscious/unresponsive'],[1,'Neurological','Active seizure state'],[1,'Respiratory','Airway compromise'],[1,'Respiratory','Severe respiratory distress/inadequate breathing'],[1,'Respiratory','Critical asthma'],[1,'Respiratory','Chest trauma with respiratory distress'],[1,'Skin','Burn ≥25% BSA or airway involvement'],

    [2,'Behaviour','Lethargic child'],[2,'Behaviour','Infant <7 days old'],[2,'Cardiovascular','Significant tachycardia'],[2,'Cardiovascular','Bradycardia'],[2,'Cardiovascular','Severe dehydration'],[2,'Cardiovascular','Uncontrolled major hemorrhage'],[2,'Child Abuse','History of ongoing risk'],[2,'Endocrine','Diabetic – ketoacidosis/hypoglycemia'],[2,'ENT','Chemical substance in eye'],[2,'ENT','Burn/penetration of eye'],[2,'ENT','Orbital infection'],[2,'ENT','Impaled object or amputation of ear'],[2,'ENT','Uncontrolled epistaxis/post-tonsillectomy bleed'],[2,'ENT','Sore throat with drooling/stridor/difficulty swallowing'],[2,'ENT','Hoarseness, sudden onset after laryngeal trauma'],[2,'Gastrointestinal','Acute GI bleeding – vomitus or rectal'],[2,'Gastrointestinal','Abdominal pain + vomiting/diarrhea + abnormal vital signs'],[2,'Genitourinary','Severe testicular pain'],[2,'Genitourinary','Urine retention ≥24 h'],[2,'Genitourinary','Paraphimosis/priapism'],[2,'Gynecological','Possible ectopic pregnancy with normal vital signs'],[2,'Gynecological','Severe vaginal bleeding'],[2,'Hematologic/Immunologic','Bleeding disorder'],[2,'Hematologic/Immunologic','Fever – neutropenia/sickle cell disease'],[2,'Infection','Toxic/septic appearance'],[2,'Infection','Infant <3 months, temperature <36°C or ≥38.5°C'],[2,'Musculoskeletal','Traumatic amputation – digit'],[2,'Musculoskeletal','Open fracture or neurovascular impairment'],[2,'Musculoskeletal','Back pain + neurologic deficit'],[2,'Musculoskeletal','Avulsed permanent tooth'],[2,'Neurological','Moderate head injury + altered mental state'],[2,'Neurological','Altered consciousness'],[2,'Neurological','Shunt dysfunction – appears ill'],[2,'Neurological','Sudden confusion/weakness/severe headache'],[2,'Psychiatry','Toxic overdose'],[2,'Psychiatry','High risk of harm to self or others'],[2,'Psychiatry','Violent behaviour'],[2,'Respiratory','Marked stridor'],[2,'Respiratory','Moderate respiratory distress'],[2,'Respiratory','Severe asthma'],[2,'Respiratory','Foreign body aspiration + respiratory distress'],[2,'Respiratory','Inhalation of toxic substances'],[2,'Skin','Burn ≥10% BSA or face/hand/foot involvement'],[2,'Skin','Chemical/electrical burn'],[2,'Skin','Purpuric rash'],

    [3,'Behaviour','Inconsolable infant'],[3,'Behaviour','Infant not feeding'],[3,'Cardiovascular','Tachycardia'],[3,'Cardiovascular','Signs of dehydration'],[3,'Cardiovascular','Uncontrolled minor hemorrhage'],[3,'Child Abuse','Physical assault'],[3,'Child Abuse','Sexual assault <48 h'],[3,'ENT','Foreign body in nose causing pain/aspiration risk'],[3,'ENT','Epistaxis controlled/history of post-tonsillectomy bleed'],[3,'ENT','Puncture wound of soft palate'],[3,'ENT','Tonsil pustules + difficulty swallowing'],[3,'ENT','Hearing problem – acute onset'],[3,'ENT','History of postoperative tonsil/adenoid bleeding'],[3,'ENT','Foreign body in ear'],[3,'ENT','Periorbital swelling with fever'],[3,'ENT','Sudden vision change'],[3,'Endocrine','Diabetic – hyperglycemia'],[3,'Gastrointestinal','Persistent bilious vomiting'],[3,'Gastrointestinal','Vomiting/diarrhea <2 years'],[3,'Gastrointestinal','Possible appendicitis'],[3,'Genitourinary','Moderate testicular pain/swelling'],[3,'Genitourinary','Inguinal bulge with pain'],[3,'Genitourinary','Urinary retention ≥8 h'],[3,'Gynecological','Vaginal bleeding + normal vital signs'],[3,'Hematologic/Immunologic','Sickle cell crisis'],[3,'Hematologic/Immunologic','Moderate allergic reaction'],[3,'Infection','Infant 3–36 months, temperature >38.5°C'],[3,'Musculoskeletal','Probable fracture, no neurovascular deficit'],[3,'Musculoskeletal','Tight cast + possible neurovascular impairment'],[3,'Musculoskeletal','Joint pain with fever'],[3,'Musculoskeletal','Dental trauma'],[3,'Neurological','Minor head injury, PCS <15'],[3,'Neurological','History of altered consciousness'],[3,'Neurological','Headache'],[3,'Neurological','Possible shunt obstruction, no distress'],[3,'Neurological','Seizure before arrival, not actively seizing'],[3,'Psychiatry','Ingestion requiring observation'],[3,'Psychiatry','Moderate risk of harm to self/others'],[3,'Psychiatry','Disruptive/distressed'],[3,'Respiratory','Stridor'],[3,'Respiratory','Mild respiratory distress'],[3,'Respiratory','Moderate asthma'],[3,'Respiratory','Foreign body aspiration, cough present, no distress'],[3,'Respiratory','Constant cough, appears distressed'],[3,'Skin','Partial-thickness burn <10% BSA'],[3,'Skin','Full-thickness burn <5% BSA'],[3,'Skin','Localized cold injury'],[3,'Skin','Cellulitis – appears ill or febrile'],[3,'Skin','Complex lacerations'],

    [4,'Behaviour','Irritable/inconsolable infant'],[4,'Behaviour','Atypical behaviour'],[4,'Cardiovascular','Chest pain with normal vital signs'],[4,'Child Abuse','Signs/history of family violence'],[4,'ENT','Corneal foreign body/abrasion'],[4,'ENT','Crusting/matting/discharge from eye'],[4,'ENT','Ear drainage'],[4,'ENT','Earache'],[4,'Gastrointestinal','Constipation/not eating/cramps'],[4,'Gastrointestinal','Abdominal pain + vomiting/diarrhea ≥2 years'],[4,'Genitourinary','Scrotal trauma'],[4,'Genitourinary','Possible urinary infection'],[4,'Hematologic/Immunologic','Local allergic reaction'],[4,'Infection','Child ≥36 months, temp >38.5°C, non-toxic'],[4,'Musculoskeletal','Possible extremity fracture – greenstick/buckle'],[4,'Musculoskeletal','Sprain/strain/extremity swelling'],[4,'Neurological','Minor head injury – no vomiting/altered consciousness, PCS 15'],[4,'Neurological','Chronic/repeating headache, no acute distress'],[4,'Psychiatry','Depression – low risk of harm to self/others'],[4,'Respiratory','Mild asthma'],[4,'Respiratory','Possible foreign body aspiration – no history of distress'],[4,'Respiratory','Minor chest injury – no respiratory distress'],[4,'Skin','Minor cold injury – no discolouration, minimal pain'],[4,'Skin','Localized cellulitis/minor burn'],

    [5,'ENT','Sore throat/laryngitis/minor mouth sores'],[5,'ENT','Nasal congestion/allergy/upper respiratory infection'],[5,'ENT','Conjunctivitis'],[5,'Gastrointestinal','Vomiting/diarrhea – no pain/dehydration, normal vitals'],[5,'Psychiatry','Chronic symptoms with no acute changes'],[5,'Skin','Superficial burn'],[5,'Skin','Minor lacerations/abrasions/contusions'],[5,'Skin','Localized rash'],[5,'Skin','Minor bite']
  ].map((x,i)=>({id:`p-${i}`,level:x[0],category:x[1],label:x[2],page:x[0]===1?51:x[0]===2?52:x[0]===3?54:x[0]===4?56:58}));

  const pediatricVitalBands = {
    rr: {
      '0-3m':   {label:'0–3 months', ranges:[[1,null,10],[2,10,20],[3,20,30],[null,30,60],[3,60,70],[2,70,80],[1,80,null]]},
      '3-6m':   {label:'3–6 months', ranges:[[1,null,10],[2,10,20],[3,20,30],[null,30,60],[3,60,70],[2,70,80],[1,80,null]]},
      '6-12m':  {label:'6–12 months', ranges:[[1,null,10],[2,10,17],[3,17,25],[null,25,45],[3,45,55],[2,55,60],[1,60,null]]},
      '1-3y':   {label:'1–3 years', ranges:[[1,null,10],[2,10,15],[3,15,20],[null,20,30],[3,30,35],[2,35,40],[1,40,null]]},
      '6y':     {label:'6 years', ranges:[[1,null,8],[2,8,12],[3,12,16],[null,16,24],[3,24,28],[2,28,32],[1,32,null]]},
      '10y':    {label:'10 years', ranges:[[1,null,8],[2,8,10],[3,10,14],[null,14,20],[3,20,24],[2,24,26],[1,26,null]]}
    },
    hr: {
      '0-3m':   {label:'0–3 months', ranges:[[1,null,40],[2,40,65],[3,65,90],[null,90,180],[3,180,205],[2,205,230],[1,230,null]]},
      '3-6m':   {label:'3–6 months', ranges:[[1,null,40],[2,40,63],[3,63,80],[null,80,160],[3,160,180],[2,180,210],[1,210,null]]},
      '6-12m':  {label:'6–12 months', ranges:[[1,null,40],[2,40,60],[3,60,80],[null,80,140],[3,140,160],[2,160,180],[1,180,null]]},
      '1-3y':   {label:'1–3 years', ranges:[[1,null,40],[2,40,58],[3,58,75],[null,75,130],[3,130,145],[2,145,165],[1,165,null]]},
      '6y':     {label:'6 years', ranges:[[1,null,40],[2,40,55],[3,55,70],[null,70,110],[3,110,125],[2,125,140],[1,140,null]]},
      '10y':    {label:'10 years', ranges:[[1,null,30],[2,30,45],[3,45,60],[null,60,90],[3,90,105],[2,105,120],[1,120,null]]}
    }
  };

  window.CTASProtocol = { adultPresentations, pediatricPresentations, pediatricVitalBands };
})();
