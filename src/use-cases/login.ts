import { ILoginUseCaseDTO } from '@/interfaces/user';

/**
 * Interface for the Login use case.
 * @interface
 */
export interface ILoginUseCase {
     /**
   * Executes the Login use case.
   * @function
   * @param {ILoginUseCaseDTO} params - The login parameters.
   * @returns {Promise<string>} - A Promise that resolves to a string representing the access token.
   */
    execute(params: ILoginUseCaseDTO): Promise<string>;
}
