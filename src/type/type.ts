
  
export interface IDataList {
    id: number;
    ownerID: number;
    userExternalID: string;
    sourceID: number;
    state: string;
    _geoloc: {
      lat: number;
      lng: number;
    };
    geography: {
      lat: number;
      lng: number;
    };
    purpose: string;
    price: number;
    product: string;
    productLabel: string;
    productScore: number;
    rentFrequency: string;
    referenceNumber: string;
    permitNumber: string;
    projectNumber: string | null;
    title: string;
    title_l1: string;
    title_l2: string;
    externalID: string;
    slug: string;
    slug_l1: string;
    slug_l2: string;
    location: Location[];
    category: Category[];
    createdAt: number;
    updatedAt: number;
    reactivatedAt: number;
    rooms: number;
    baths: number;
    area: number;
    score: number;
    score_l1: number;
    score_l2: number;
    coverPhoto: {
      id: number;
      externalID: string;
      title: string | null;
      orderIndex: number;
      nimaScore: number;
      url: string;
      main: boolean;
    };
    photoCount: number;
    videoCount: number;
    panoramaCount: number;
    phoneNumber: {
      mobile: string;
      phone: string;
      whatsapp: string;
      phoneNumbers: string[];
      mobileNumbers: string[];
    };
    contactName: string;
    agency: Agency;
    hash: string;
    keywords: string[];
    isVerified: boolean;
    verification: {
      updatedAt: number;
      eligible: boolean;
      status: string;
      verifiedAt: number;
    };
    verifiedScore: number;
    completionStatus: string;
    randBoostScore: number;
    randBoostScore_l1: number;
    randBoostScore_l2: number;
    floorPlanID: number;
    furnishingStatus: string | null;
    extraFields: object;
    type: string;
    ownerAgent: {
      externalID: string;
      // Add other properties if needed
    };
  }
  
  interface Location {
    id: number;
    level: number;
    externalID: string;
    name: string;
    name_l1: string;
    name_l2: string;
    slug: string;
    slug_l1: string;
    slug_l2: string;
    type?: string;
  }
  
  interface Category {
    id: number;
    level: number;
    externalID: string;
    name: string;
    name_l1: string;
    name_l2: string;
    slug: string;
    slug_l1: string;
    slug_l2: string;
    nameSingular: string;
    nameSingular_l1: string;
    nameSingular_l2: string;
  }
  
  interface Agency {
    id: number;
    objectID: number;
    name: string;
    name_l1: string;
    name_l2: string;
    externalID: string;
    product: string;
    productScore: number;
    licenses: {
      number: string;
      authority: string;
    }[];
    logo: {
      id: number;
      url: string;
    };
    slug: string;
    slug_l1: string;
    slug_l2: string;
    tr: number;
    tier: number;
    roles: any[];
    active: boolean;
  }
  export interface IDataDetails {
    id: number;
    objectID: number;
    ownerID: number;
    userExternalID: string;
    sourceID: number;
    state: string;
    geography: {
      lat: number;
      lng: number;
    };
    purpose: string;
    price: number;
    product: string;
    productLabel: string;
    rentFrequency: null | string;
    referenceNumber: string;
    permitNumber: string;
    title: string;
    title_l1: string;
    description: string;
    description_l1: string;
    externalID: string;
    slug: string;
    slug_l1: string;
    location: {
      id: number;
      level: number;
      externalID: string;
      name: string;
      name_l1: string;
      slug: string;
      slug_l1: string;
    }[];
    category: {
      id: number;
      level: number;
      externalID: string;
      name: string;
      name_l1: string;
      slug: string;
      slug_l1: string;
      nameSingular: string;
      nameSingular_l1: string;
    }[];
    createdAt: number;
    approvedAt: number;
    updatedAt: number;
    touchedAt: number;
    reactivatedAt: number;
    rooms: number;
    baths: number;
    area: number;
    score: number;
    score_l1: number;
    coverPhoto: {
      id: number;
      externalID: string;
      title: string;
      url: string;
      orderIndex: number;
      nimaScore: number;
      main: boolean;
    };
    photoCount: number;
    videoCount: number;
    panoramaCount: number;
    photos: {
      id: number;
      externalID: string;
      title: string;
      url: string;
      orderIndex: number;
      nimaScore: number;
    }[];
    floorPlans: any[];
    videos: any[];
    panoramas: any[];
    amenities: any[];
    phoneNumber: {
      mobile: string;
      phone: string;
      whatsapp: string;
      proxyMobile: string;
      phoneNumbers: string[];
      mobileNumbers: string[];
    };
    contactName: string;
    agency: {
      id: number;
      objectID: number;
      name: string;
      name_l1: string;
      externalID: string;
      product: string;
      productScore: number;
      licenses: {
        number: string;
        authority: string;
      }[];
      logo: {
        id: number;
        url: string;
      };
      slug: string;
      slug_l1: string;
      tier: number;
    };
    active: boolean;
    hasExactGeography: boolean;
    verification: {
      status: string;
      type: null | string;
      eligible: boolean;
      comment: null | string;
      updatedAt: number;
      verifiedAt: null | number;
      visitedAt: null | number;
    };
    isVerified: boolean;
    completionStatus: string;
    randBoostScore: number;
    randBoostScore_l1: number;
    furnishingStatus: null | string;
    extraFields: null | any;
    type: string;
    cityLevelScore: number;
    indyScore: number;
    indyScore_l1: number;
    hasMatchingFloorPlans: boolean;
  }
  
  
  