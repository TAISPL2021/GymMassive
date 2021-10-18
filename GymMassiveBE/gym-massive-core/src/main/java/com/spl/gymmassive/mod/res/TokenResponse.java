/**
 * 
 */
package com.spl.gymmassive.mod.res;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

/**
 * @author brayan.guerrero
 *
 */
@Builder
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class TokenResponse {

	private String email;
	private String token;
	private String refreshToken;

}
