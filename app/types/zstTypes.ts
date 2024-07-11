export interface ZstDay{
    date          :Date;
    zstContent    :ZstContent[];
}

export interface ZstContent  {
    title               :string;
    public_flg          :boolean;
    content_public_flg  :boolean;
    content             :string[];    
}