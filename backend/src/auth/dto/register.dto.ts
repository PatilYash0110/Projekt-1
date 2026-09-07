import { IsEmail, IsString, Matches, MaxLength, MinLength } from 'class-validator';

const THM_EMAIL_PATTERN = /^[^\s@]+@([a-z0-9-]+\.)*thm\.de$/i;

export class RegisterDto {
  @IsString()
  @MinLength(1)
  @MaxLength(100)
  name: string;

  @IsEmail()
  @Matches(THM_EMAIL_PATTERN, {
    message: 'Bitte verwende eine gültige @thm.de-Adresse (auch Subdomains wie @mnd.thm.de).',
  })
  email: string;

  @IsString()
  @MinLength(8)
  @MaxLength(72)
  password: string;
}