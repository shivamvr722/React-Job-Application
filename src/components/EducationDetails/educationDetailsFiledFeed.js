export default function educationFieldFeeds(){
  return fieldData
}

const fieldData = [
  {
    "title": "Board/University",
    "hint": "Board/University",
    "name": "boarduni",
    "max": 50,
    "min": 5,
    "type": "text",
    "isrequired": true
  }, 
  {
    "title": "Couse Name",
    "hint": "Couse Name",
    "name": "course",
    "max": 50,
    "min": 2,
    "type": "text",
    "isrequired": true
  },
  {
    "title": "Passing Year",
    "hint": "YYYY",
    "name": "passyear",
    "max": 4,
    "min": 4,
    "type": "text",
    "isrequired": true
  },
  {
    "title": "Percentage",
    "hint": "95.55",
    "name": "percentage",
    "max": 4,
    "min": 1,
    "type": "text",
    "isrequired": true
  },
]